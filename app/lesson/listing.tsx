"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { useEffect, useImperativeHandle, useState, forwardRef } from "react";

export type ListingHandle = {
  submit: () => void;
  reset: () => void;
};

type Props = {
  question: string;
  items: string[];
  disabled?: boolean;
  onSuccess: () => void;
  onFail: () => void;
};

export const ListingChallenge = forwardRef<ListingHandle, Props>(
  ({ question, items, disabled, onSuccess, onFail }, ref) => {
    const [shuffledItems, setShuffledItems] = useState<string[]>([]);
    const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 1,
        },
      })
    );

    useEffect(() => {
      setShuffledItems([...items].sort(() => Math.random() - 0.5));
      setStatus("idle");
    }, [items]);

    const handleDragEnd = (event: any) => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = shuffledItems.indexOf(active.id);
        const newIndex = shuffledItems.indexOf(over.id);
        setShuffledItems(arrayMove(shuffledItems, oldIndex, newIndex));
      }
    };

    useImperativeHandle(ref, () => ({
      submit: () => {
        const isCorrect = items.every(
          (item, index) => item === shuffledItems[index]
        );
        if (isCorrect) {
          setStatus("correct");
          onSuccess();
        } else {
          setStatus("wrong");
          onFail();
        }
      },
      reset: () => {
        setShuffledItems([...items].sort(() => Math.random() - 0.5));
        setStatus("idle");
      },
    }));

    return (
      <div className="w-full max-w-xl mx-auto px-4 sm:px-0 py-4 sm:py-8 
                min-h-0 sm:min-h-0 
                flex sm:block flex-col sm:flex-none justify-start 
                space-y-6">




        <p className="text-xl sm:text-3xl font-bold text-center leading-snug sm:leading-relaxed">
          {question}
        </p>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={shuffledItems}
            strategy={verticalListSortingStrategy}
          >
            {shuffledItems.map((item) => (
              <SortableItem key={item} id={item} status={status} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    );
  }
);


type SortableItemProps = {
  id: string;
  status: "idle" | "correct" | "wrong";
};

const SortableItem = ({ id, status }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(
        "p-3 sm:p-5 rounded border shadow-sm bg-white cursor-move mb-4 text-center text-lg sm:text-3xl leading-snug sm:leading-relaxed tracking-wide font-normal",
        status === "correct"
          ? "border-green-500"
          : status === "wrong"
          ? "border-red-500"
          : "border-gray-300"
      )}
    >
      {id}
    </div>
  );
};


