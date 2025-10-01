import {
  BooleanInput,
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useGetList,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { useMemo } from "react";

// Filtered Unit based on selected Course
const FilteredUnitInput = () => {
  const courseId = useWatch({ name: "courseId" });

  const { data: units = [] } = useGetList("units", {
    filter: courseId ? { courseId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const unitChoices = useMemo(() => units.map(u => ({ id: u.id, name: u.title })), [units]);

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

// Filtered Lesson based on selected Unit
const FilteredLessonInput = () => {
  const unitId = useWatch({ name: "unitId" });

  const { data: lessons = [] } = useGetList("lessons", {
    filter: unitId ? { unitId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const lessonChoices = useMemo(() => lessons.map(l => ({ id: l.id, name: l.title })), [lessons]);

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

// Filtered Challenge based on selected Lesson
const FilteredChallengeInput = () => {
  const lessonId = useWatch({ name: "lessonId" });

  const { data: challenges = [] } = useGetList("challenges", {
    filter: lessonId ? { lessonId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const challengeChoices = useMemo(() => challenges.map(c => ({ id: c.id, name: c.question })), [challenges]);

  return (
    <SelectInput
      source="challengeId"
      label="Challenge"
      choices={challengeChoices}
      disabled={!lessonId}
      validate={[required()]}
    />
  );
};

export const ChallengeOptionCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="text" label="Text" validate={[required()]} />
        <BooleanInput source="correct" label="Correct Option" />

        {/* Course → Unit → Lesson → Challenge chain */}
        <ReferenceInput source="courseId" reference="courses" label="Course">
          <SelectInput optionText="title" validate={[required()]} />
        </ReferenceInput>

        <FilteredUnitInput />
        <FilteredLessonInput />
        <FilteredChallengeInput />

        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Create>
  );
};
