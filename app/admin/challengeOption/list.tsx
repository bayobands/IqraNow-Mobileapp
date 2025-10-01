import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  useGetList,
  useListContext,
  Filter,
} from "react-admin";
import { useEffect, useMemo, useState } from "react";

const ChallengeOptionFilter = (props: any) => {
  const { filterValues, setFilters } = useListContext();
  const selectedCourseId = filterValues.courseId;
  const selectedUnitId = filterValues.unitId;
  const selectedLessonId = filterValues.lessonId;

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

  const { data: challenges = [] } = useGetList("challenges", {
    filter: selectedLessonId ? { lessonId: selectedLessonId } : {},
    pagination: { page: 1, perPage: 100 },
    sort: { field: "id", order: "ASC" },
  });

  const unitChoices = useMemo(() => units.map(u => ({ id: u.id, name: u.title })), [units]);
  const lessonChoices = useMemo(() => lessons.map(l => ({ id: l.id, name: l.title })), [lessons]);
  const challengeChoices = useMemo(() => challenges.map(c => ({ id: c.id, name: c.question })), [challenges]);

  useEffect(() => {
    if (selectedCourseId && filterValues.unitId && !units.some(u => u.id === filterValues.unitId)) {
      setFilters({ ...filterValues, unitId: undefined, lessonId: undefined, challengeId: undefined });
    }
  }, [selectedCourseId, units]);

  useEffect(() => {
    if (selectedUnitId && filterValues.lessonId && !lessons.some(l => l.id === filterValues.lessonId)) {
      setFilters({ ...filterValues, lessonId: undefined, challengeId: undefined });
    }
  }, [selectedUnitId, lessons]);

  useEffect(() => {
    if (selectedLessonId && filterValues.challengeId && !challenges.some(c => c.id === filterValues.challengeId)) {
      setFilters({ ...filterValues, challengeId: undefined });
    }
  }, [selectedLessonId, challenges]);

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

      {selectedLessonId && (
        <SelectInput source="challengeId" label="Challenge" choices={challengeChoices} alwaysOn />
      )}
    </Filter>
  );
};

// Custom infinite-load Datagrid
const CustomChallengeOptionDatagrid = () => {
  const { data = [], isLoading } = useListContext();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) return <p className="p-4">Loading...</p>;

  const visibleRows = data.slice(0, visibleCount);

  return (
    <>
      <Datagrid rowClick="edit" data={visibleRows}>
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" link="show">
          <TextField source="question" />
        </ReferenceField>
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
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

export const ChallengeOptionList = () => (
  <List
    filters={<ChallengeOptionFilter />}
    perPage={1000}
    pagination={false}
  >
    <CustomChallengeOptionDatagrid />
  </List>
);
