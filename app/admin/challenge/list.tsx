import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  SelectField,
  NumberField,
  ReferenceInput,
  SelectInput,
  useGetList,
  useListContext,
  Filter,
} from "react-admin";
import { useEffect, useMemo, useState } from "react";

// 🔁 Dependent filter component
const ChallengeFilter = (props: any) => {
  const { filterValues, setFilters } = useListContext();
  const selectedCourseId = filterValues.courseId;
  const selectedUnitId = filterValues.unitId;

  const { data: units = [] } = useGetList("units", {
    filter: selectedCourseId ? { courseId: selectedCourseId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const { data: lessons = [] } = useGetList("lessons", {
    filter: selectedUnitId ? { unitId: selectedUnitId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const unitChoices = useMemo(
    () => units.map((u: any) => ({ id: u.id, name: u.title })),
    [units]
  );

  const lessonChoices = useMemo(
    () => lessons.map((l: any) => ({ id: l.id, name: l.title })),
    [lessons]
  );

  useEffect(() => {
    if (
      selectedCourseId &&
      filterValues.unitId &&
      !units.some((u) => u.id === filterValues.unitId)
    ) {
      setFilters({ ...filterValues, unitId: undefined, lessonId: undefined });
    }
  }, [selectedCourseId, units]);

  useEffect(() => {
    if (
      selectedUnitId &&
      filterValues.lessonId &&
      !lessons.some((l) => l.id === filterValues.lessonId)
    ) {
      setFilters({ ...filterValues, lessonId: undefined });
    }
  }, [selectedUnitId, lessons]);

  return (
    <Filter {...props}>
      <ReferenceInput source="courseId" reference="courses" label="Course" alwaysOn>
        <SelectInput optionText="title" />
      </ReferenceInput>

      {selectedCourseId && (
        <SelectInput source="unitId" label="Unit" choices={unitChoices} alwaysOn />
      )}

      {selectedUnitId && (
        <SelectInput source="lessonId" label="Lesson" choices={lessonChoices} alwaysOn />
      )}
    </Filter>
  );
};

// 📦 Custom infinite-load Datagrid
const CustomChallengeDatagrid = () => {
  const { data = [], isLoading } = useListContext();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) return <p className="p-4">Loading...</p>;

  const visibleRows = data.slice(0, visibleCount);

  return (
    <>
      <Datagrid rowClick="edit" data={visibleRows}>
        <TextField source="id" />
        <TextField source="question" />
        <SelectField
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
          ]}
        />
        <ReferenceField source="lessonId" reference="lessons" />
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
export const ChallengeList = () => {
  return (
    <List
      filters={<ChallengeFilter />}
      perPage={1000}
      pagination={false}
    >
      <CustomChallengeDatagrid />
    </List>
  );
};
