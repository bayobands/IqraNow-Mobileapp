import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceField,
  TextField,
  required,
} from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
        <ReferenceField
          source="unitId"
          reference="units"
          label="Unit"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>

        <TextInput
          source="title"
          label="Title"
          validate={required()}
          fullWidth
        />

        <NumberInput
          source="order"
          label="Order"
          validate={required()}
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
};
