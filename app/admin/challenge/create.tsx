import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  FormDataConsumer,
  useGetList,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { useMemo, useState } from "react";

/* --------------------------- Filters for Unit/Lesson --------------------------- */

const FilteredUnitInput = () => {
  const courseId = useWatch({ name: "courseId" });

  const { data: units = [] } = useGetList("units", {
    filter: courseId ? { courseId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const unitChoices = useMemo(
    () => units.map((u: any) => ({ id: u.id, name: u.title })),
    [units]
  );

  return (
    <SelectInput
      source="unitId"
      label="Unit"
      choices={unitChoices}
      disabled={!courseId}
      validate={[required()]}
    />
  );
};

const FilteredLessonInput = () => {
  const unitId = useWatch({ name: "unitId" });

  const { data: lessons = [] } = useGetList("lessons", {
    filter: unitId ? { unitId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const lessonChoices = useMemo(
    () => lessons.map((l: any) => ({ id: l.id, name: l.title })),
    [lessons]
  );

  return (
    <SelectInput
      source="lessonId"
      label="Lesson"
      choices={lessonChoices}
      disabled={!unitId}
      validate={[required()]}
    />
  );
};

/* --------------------------- Page Component --------------------------- */

export const ChallengeCreate = () => {
  const [matchingPairs, setMatchingPairs] = useState([{ term: "", definition: "" }]);

  const handleAddPair = () => {
    setMatchingPairs([...matchingPairs, { term: "", definition: "" }]);
  };

  const handlePairChange = (index: number, field: "term" | "definition", value: string) => {
    const updated = [...matchingPairs];
    updated[index][field] = value;
    setMatchingPairs(updated);
  };

  /* -------- Form-level validation (React-Admin) to enforce rules -------- */
  const validateForm = (values: any) => {
    const errors: any = {};

    // INTRO2: at least two videos
    if (values.type === "INTRO2") {
      const vids = [
        values.intro2_video_1,
        values.intro2_video_2,
        values.intro2_video_3,
        values.intro2_video_4,
        values.intro2_video_5,
        values.intro2_video_6,
      ].filter((v) => typeof v === "string" && v.trim().length > 0);

      if (vids.length < 2) {
        errors.intro2_video_1 = "Provide at least two videos.";
        errors.intro2_video_2 = "Provide at least two videos.";
      }
    }

    // MATCHING: at least one valid pair
    if (values.type === "MATCHING") {
      const hasValidPair = matchingPairs.some(
        (p) => p.term.trim().length && p.definition.trim().length
      );
      if (!hasValidPair) {
        errors.content = "Add at least one matching pair.";
      }
    }

    // SPEAK: require target text
    if (values.type === "SPEAK") {
      if (!values.speak_text || !values.speak_text.trim()) {
        errors.speak_text = "Target text is required.";
      }
      // transliteration optional (recommended)
    }

    return errors;
  };

  const hasArabic = (s?: string) => !!s && /[\p{Script=Arabic}]/u.test(s);

  return (
    <Create
      redirect="list"
      /* -------------------------- Payload shaping -------------------------- */
      transform={(data) => {
        const clean = (s?: string) => (typeof s === "string" ? s.trim() : s) || undefined;

        if (data.type === "MATCHING") {
          return {
            ...data,
            content: { pairs: matchingPairs },
          };
        }

        if (data.type === "ORDERING") {
          return {
            ...data,
            content: {
              items: (data.orderingItems || "")
                .split("\n")
                .map((s: string) => s.trim())
                .filter(Boolean),
            },
          };
        }

        if (data.type === "LISTING") {
          return {
            ...data,
            content: {
              listingItems: (data.listingItems || "")
                .split("\n")
                .map((s: string) => s.trim())
                .filter(Boolean),
            },
          };
        }

        if (data.type === "INTRO2") {
          return {
            ...data,
            question: typeof data.question === "string" ? data.question : "",
            intro2_video_1: clean(data.intro2_video_1),
            intro2_response_1: clean(data.intro2_response_1),
            intro2_video_2: clean(data.intro2_video_2),
            intro2_response_2: clean(data.intro2_response_2),
            intro2_video_3: clean(data.intro2_video_3),
            intro2_response_3: clean(data.intro2_response_3),
            intro2_video_4: clean(data.intro2_video_4),
            intro2_response_4: clean(data.intro2_response_4),
            intro2_video_5: clean(data.intro2_video_5),
            intro2_response_5: clean(data.intro2_response_5),
            intro2_video_6: clean(data.intro2_video_6),
            intro2_response_6: clean(data.intro2_response_6),
          };
        }

        if (data.type === "SPEAK") {
          const speak_text = clean(data.speak_text);
          const speak_lang =
            clean(data.speak_lang) ||
            (hasArabic(speak_text) ? "ar-SA" : "en-US"); // sensible default
          return {
            ...data,
            speak_text,
            speak_audio_ref: clean(data.speak_audio_ref),
            speak_lang,
            speak_transliteration: clean(data.speak_transliteration), // ✅ include in payload
          };
        }

        return data;
      }}
    >
      <SimpleForm validate={validateForm}>
        {/* Question: required for most types, OPTIONAL for INTRO2 */}
        <FormDataConsumer>
          {({ formData }) => (
            <TextInput
              source="question"
              label="Question"
              validate={formData.type === "INTRO2" ? [] : [required()]}
            />
          )}
        </FormDataConsumer>

        <SelectInput
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
            { id: "INTRO", name: "INTRO" },
            { id: "INTRO2", name: "INTRO2" },
            { id: "INTRO3", name: "INTRO3" },
            { id: "AUDIO", name: "AUDIO" },
            { id: "INFO", name: "INFO" },
            { id: "INFO2", name: "INFO2" },
            { id: "INFO3", name: "INFO3" },
            { id: "MATCHING", name: "MATCHING" },
            { id: "ORDERING", name: "ORDERING" },
            { id: "LISTING", name: "LISTING" },
            { id: "AUDIO_ASSIST", name: "AUDIO_ASSIST" },
            { id: "VISUAL", name: "VISUAL" },
            { id: "SPEAK", name: "SPEAK" }, // ✅
          ]}
          validate={[required()]}
        />

        <FormDataConsumer>
          {({ formData }) => (
            <>
              {/* INTRO */}
              {formData.type === "INTRO" && (
                <>
                  <TextInput
                    source="introImgSrc"
                    label="Intro Image/Video URL (Mobile)"
                    validate={[required()]}
                  />
                  <TextInput
                    source="introImgSrc2"
                    label="Intro Image/Video URL (Desktop)"
                    validate={[required()]}
                  />
                </>
              )}

              {/* INTRO2 */}
              {formData.type === "INTRO2" && (
                <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
                  <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>Intro2: Video/Response Cycles (2–6)</h3>

                  <TextInput source="intro2_video_1" label="Video 1 URL" validate={[required()]} fullWidth />
                  <TextInput source="intro2_response_1" label="Response 1 (text to display)" fullWidth />

                  <TextInput source="intro2_video_2" label="Video 2 URL" validate={[required()]} fullWidth />
                  <TextInput source="intro2_response_2" label="Response 2 (text to display)" fullWidth />

                  <TextInput source="intro2_video_3" label="Video 3 URL (optional)" fullWidth />
                  <TextInput source="intro2_response_3" label="Response 3 (optional)" fullWidth />

                  <TextInput source="intro2_video_4" label="Video 4 URL (optional)" fullWidth />
                  <TextInput source="intro2_response_4" label="Response 4 (optional)" fullWidth />

                  <TextInput source="intro2_video_5" label="Video 5 URL (optional)" fullWidth />
                  <TextInput source="intro2_response_5" label="Response 5 (optional)" fullWidth />

                  <TextInput source="intro2_video_6" label="Video 6 URL (optional)" fullWidth />
                  <TextInput source="intro2_response_6" label="Response 6 (optional)" fullWidth />
                </div>
              )}

              {/* AUDIO */}
              {formData.type === "AUDIO" && (
                <>
                  <TextInput source="imageSrc" label="Question Image URL" validate={[required()]} />
                  <TextInput source="audioSrc" label="Question Audio URL" validate={[required()]} />
                </>
              )}

              {/* INFO */}
              {formData.type === "INFO" && (
                <>
                  <TextInput
                    source="infoimageSrc"
                    label="Info Video URL (Mobile)"
                    validate={[required()]}
                  />
                  <TextInput
                    source="infoimageSrc2"
                    label="Info Video URL (Desktop)"
                    validate={[required()]}
                  />
                </>
              )}

              {/* INFO2 */}
              {formData.type === "INFO2" && (
                <>
                  <TextInput
                    source="info2imageSrc_desktop"
                    label="Info2 Image URL (Desktop)"
                    validate={[required()]}
                  />
                  <TextInput
                    source="info2imageSrc_mobile"
                    label="Info2 Image URL (Mobile)"
                    validate={[required()]}
                  />
                  <TextInput
                    source="audioSrc"
                    label="Audio URL"
                    validate={[required()]}
                  />
                </>
              )}

              {/* INFO3 */}
              {formData.type === "INFO3" && (
                <>
                  <TextInput
                    source="info3imageSrc_desktop"
                    label="Info3 Image URL (Desktop)"
                    validate={[required()]}
                  />
                  <TextInput
                    source="info3imageSrc_mobile"
                    label="Info3 Image URL (Mobile)"
                    validate={[required()]}
                  />
                </>
              )}

              {/* MATCHING */}
              {formData.type === "MATCHING" && (
                <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
                  <h3 style={{ fontWeight: "bold" }}>Matching Pairs</h3>
                  {matchingPairs.map((pair, index) => (
                    <div key={index} style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
                      <input
                        type="text"
                        placeholder="Term"
                        value={pair.term}
                        onChange={(e) => handlePairChange(index, "term", e.target.value)}
                        style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                      />
                      <input
                        type="text"
                        placeholder="Definition"
                        value={pair.definition}
                        onChange={(e) => handlePairChange(index, "definition", e.target.value)}
                        style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                      />
                    </div>
                  ))}
                  <button type="button" onClick={handleAddPair} style={{ marginTop: "0.5rem" }}>
                    ➕ Add Pair
                  </button>
                </div>
              )}

              {/* VISUAL */}
              {formData.type === "VISUAL" && (
                <TextInput
                  source="visual_image_src"
                  label="Visual Image URL"
                  validate={[required()]}
                />
              )}

              {/* ORDERING */}
              {formData.type === "ORDERING" && (
                <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
                  <h3 style={{ fontWeight: "bold" }}>Steps in Order</h3>
                  <TextInput
                    source="orderingItems"
                    label="Enter one item per line"
                    multiline
                    fullWidth
                  />
                </div>
              )}

              {/* LISTING */}
              {formData.type === "LISTING" && (
                <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
                  <h3 style={{ fontWeight: "bold" }}>Listing Items (Top to Bottom)</h3>
                  <TextInput
                    source="listingItems"
                    label="Enter one item per line"
                    multiline
                    fullWidth
                  />
                </div>
              )}

              {/* AUDIO_ASSIST */}
              {formData.type === "AUDIO_ASSIST" && (
                <>
                  <TextInput
                    source="imageSrc"
                    label="Image URL"
                    validate={[required()]}
                  />
                  <TextInput
                    source="audioSrc"
                    label="Audio URL"
                    validate={[required()]}
                  />
                </>
              )}

              {/* SPEAK (NEW) */}
              {formData.type === "SPEAK" && (
                <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
                  <h3 style={{ fontWeight: "bold" }}>SPEAK: Pronunciation Practice</h3>
                  <TextInput
                    source="speak_text"
                    label="Target Text (what the learner should say)"
                    validate={[required()]}
                    fullWidth
                  />
                  <TextInput
                    source="speak_transliteration" // ✅ NEW FIELD
                    label="Transliteration shown to learner (optional)"
                    fullWidth
                    placeholder="e.g., Ar-Rah-maan"
                  />
                  <TextInput
                    source="speak_audio_ref"
                    label="Reference Audio URL (optional)"
                    fullWidth
                  />
                  <TextInput
                    source="speak_lang"
                    label='Recognition Language (e.g. "ar-SA", "en-US")'
                    fullWidth
                  />
                </div>
              )}
            </>
          )}
        </FormDataConsumer>

        {/* hidden content field so RA allows transform to write into it */}
        <TextInput source="content" style={{ display: "none" }} />

        {/* Course / Unit / Lesson selectors */}
        <ReferenceInput source="courseId" reference="courses" label="Course">
          <SelectInput optionText="title" validate={[required()]} />
        </ReferenceInput>

        <FilteredUnitInput />
        <FilteredLessonInput />

        <NumberInput source="order" label="Order" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
