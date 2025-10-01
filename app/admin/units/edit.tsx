import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
        <TextInput
          source="title"
          label="Title"
          validate={[required()]}
        />

        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />

        <ReferenceInput source="courseId" reference="courses" label="Course">
          <SelectInput optionText="title" validate={[required()]} />
        </ReferenceInput>

        <NumberInput
          source="order"
          label="Order"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};
