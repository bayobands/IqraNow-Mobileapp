import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Filter,
  useListContext,
} from "react-admin";
import { useState } from "react";

// ✅ Only course dropdown filter now
const UnitFilter = (props: any) => (
  <Filter {...props}>
    <ReferenceInput source="courseId" reference="courses" label="Course" alwaysOn>
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

// Custom datagrid with infinite "Load More"
const CustomDatagrid = () => {
  const { data = [], isLoading } = useListContext();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) return <p className="p-4">Loading...</p>;

  const visibleRows = data.slice(0, visibleCount);

  return (
    <>
      <Datagrid rowClick="edit" data={visibleRows}>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField source="courseId" reference="courses" />
        <TextField source="order" />
      </Datagrid>

      {visibleCount < data.length && (
        <div style={{ textAlign: "center", padding: 16 }}>
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

// Main component
export const UnitList = () => {
  return (
    <List
      filters={<UnitFilter />}
      perPage={1000}
      pagination={false}
    >
      <CustomDatagrid />
    </List>
  );
};
