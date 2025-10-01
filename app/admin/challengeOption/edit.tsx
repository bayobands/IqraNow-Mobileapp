import {
  BooleanInput,
  Edit,
  ReferenceField,
  SimpleForm,
  TextInput,
  useRecordContext,
  required,
  TextField,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>


        {/* ✅ Read-only Challenge display */}
        <ReferenceField
          source="challengeId"
          reference="challenges"
          label="Challenge"
          link={false} // disable clickable link
        >
          <TextField source="question" />
        </ReferenceField>


        <TextInput
          source="text"
          label="Text"
          validate={required()}
        />

        <BooleanInput
          source="correct"
          label="Correct Option"
        />



        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Edit>
  );
};
