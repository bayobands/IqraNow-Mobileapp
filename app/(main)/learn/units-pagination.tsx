"use client";

import { useState } from "react";
import { Unit } from "./unit";
import { lessons, units as unitsSchema } from "@/db/schema";

type UnitType = typeof unitsSchema.$inferSelect & {
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
};

type Props = {
  units: UnitType[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof unitsSchema.$inferSelect;
  } | undefined;
  activeLessonPercentage: number;
};

const UnitsPagination = ({ units, activeLesson, activeLessonPercentage }: Props) => {
  const unitsPerPage = 3;

  // 🔍 Find the index of the unit that contains the active lesson
  const activeUnitIndex = units.findIndex((unit) => unit.id === activeLesson?.unit.id);
  const defaultPage = activeUnitIndex === -1 ? 0 : Math.floor(activeUnitIndex / unitsPerPage);

  const [page, setPage] = useState(defaultPage);

  const startIndex = page * unitsPerPage;
  const endIndex = startIndex + unitsPerPage;
  const currentUnits = units.slice(startIndex, endIndex);

  const hasPrevious = page > 0;
  const hasNext = endIndex < units.length;

  return (
    <div>
      <div className="flex justify-between mt-6 mb-6">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={!hasPrevious}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!hasNext}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {currentUnits.map((unit) => (
        <div key={unit.id} className="mb-10">
          <Unit
            id={unit.id}
            order={unit.order}
            description={unit.description}
            title={unit.title}
            lessons={unit.lessons}
            activeLesson={activeLesson}
            activeLessonPercentage={activeLessonPercentage}
          />
        </div>
      ))}


    </div>
  );
};

export default UnitsPagination;
