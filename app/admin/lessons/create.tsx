import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useGetList,
  required,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { useMemo } from "react";

// 🔁 Custom dropdown for filtered unit
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

export const LessonCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} fullWidth />

        <ReferenceInput source="courseId" reference="courses" label="Course">
          <SelectInput optionText="title" validate={[required()]} />
        </ReferenceInput>

        <FilteredUnitInput />

        <NumberInput source="order" label="Order" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
