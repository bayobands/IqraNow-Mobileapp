import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceField,
  TextField,
  required,
} from "react-admin";

import { useWatch } from "react-hook-form";
import { Box } from "@mui/material";

// 🧠 Optional Conditional Inputs (e.g., AUDIO, INFO2)
const ConditionalMediaInputs = () => {
  const type = useWatch({ name: "type" });

  if (type === "AUDIO") {
    return (
      <>
        <TextInput source="imageSrc" label="Question Image URL" validate={[required()]} />
        <TextInput source="audioSrc" label="Question Audio URL" validate={[required()]} />
      </>
    );
  }
  
  if (type === "INFO2") {
    return (
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
    );
  }
  if (type === "INFO") {
  return (
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
  );
}

  if (type === "INFO3") {
  return (
    <>
      <TextInput
        source="info3imageSrc_desktop"
        label="Info Video URL (Desktop)"
        validate={[required()]}
      />
      <TextInput
        source="info3imageSrc_mobile"
        label="Info Video URL (Mobile)"
        validate={[required()]}
      />
    </>
  );
}
if (type === "INTRO") {
  return (
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
  );
}


  return null;
};

export const ChallengeEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>

                {/* ✅ Read-only Lesson (Full Width) */}
        <ReferenceField source="lessonId" reference="lessons" label="Lesson" link={false}>
          <Box sx={{ width: "100%", py: 1 }}>
            <TextField source="title" />
          </Box>
        </ReferenceField>

        
        <TextInput source="question" label="Question" validate={[required()]} />

        <SelectInput
          source="type"
          label="Type"
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
          ]}
          validate={[required()]}
        />

        <ConditionalMediaInputs />



        <NumberInput source="order" label="Order" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
