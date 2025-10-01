import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  ReferenceInput,
  SelectInput,
  useGetList,
  useListContext,
  Filter,
} from "react-admin";
import { useState, useMemo, useEffect } from "react";

// Filter: Course + dynamic Unit based on selected course
const LessonFilter = (props: any) => {
  const { filterValues, setFilters } = useListContext();
  const selectedCourseId = filterValues?.courseId;

  const { data: units = [] } = useGetList("units", {
    filter: selectedCourseId ? { courseId: selectedCourseId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const unitChoices = useMemo(
    () => units.map((u: any) => ({ id: u.id, name: u.title })),
    [units]
  );

  useEffect(() => {
    if (
      selectedCourseId &&
      filterValues.unitId &&
      !units.some((u) => u.id === filterValues.unitId)
    ) {
      setFilters({ ...filterValues, unitId: undefined });
    }
  }, [selectedCourseId, units, filterValues, setFilters]);

  return (
    <Filter {...props}>
      <ReferenceInput source="courseId" reference="courses" label="Course" alwaysOn>
        <SelectInput optionText="title" />
      </ReferenceInput>

      {selectedCourseId && (
        <SelectInput
          source="unitId"
          label="Unit"
          choices={unitChoices}
          alwaysOn
          emptyText="Select unit"
        />
      )}
    </Filter>
  );
};

// Custom Datagrid with Load More
const CustomLessonDatagrid = () => {
  const { data = [], isLoading } = useListContext();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) return <p className="p-4">Loading...</p>;

  const visibleRows = data.slice(0, visibleCount);

  return (
    <>
      <Datagrid rowClick="edit" data={visibleRows}>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units" />
        <NumberField source="order" />
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

// Main List
export const LessonList = () => {
  return (
    <List
      filters={<LessonFilter />}
      perPage={1000}
      pagination={false}
    >
      <CustomLessonDatagrid />
    </List>
  );
};
