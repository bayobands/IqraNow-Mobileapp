"use client";

import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Ref,
  useRef,
} from "react";

type Props = {
  items: string[];
  onSuccess: () => void;
  onFail: () => void;
  disabled?: boolean;
  chipWidth?: number;
  barCols?: number;
  barGapPx?: number;
};

const BAR_ID = "BAR";
const POOL_ID = "POOL";
const HEADER_IMG =
  "https://res.cloudinary.com/dkahuuvrf/image/upload/v1756942860/Build_The_Ayah_1_qmwgh7.png";
const INTRO_AUDIO =
  "https://res.cloudinary.com/dkahuuvrf/video/upload/v1756943127/build_the_ayah_eueirs.mp3";

export const OrderingChallenge = forwardRef(
  (
    {
      items,
      onSuccess,
      onFail,
      disabled,
      chipWidth = 120,
      barCols = 6,
      barGapPx = 12,
    }: Props,
    ref: Ref<{ submit: () => void; reset: () => void }>
  ) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [pool, setPool] = useState<string[]>(shuffleArray(items));
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const sensors = useSensors(useSensor(PointerSensor));
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // 🔊 play intro audio once when component mounts
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay may be blocked until user interacts
        });
      }
    }, []);

    const handleDragStart = (event: DragStartEvent) => {
      setActiveId(event.active.id as string);
      setIsDragging(true);
    };

    const handleDragEnd = (event: DragEndEvent) => {
      setActiveId(null);
      setIsDragging(false);

      const { active, over } = event;
      if (!over) return;

      const activeStr = String(active.id);
      const overId = String(over.id);

      const fromBar = selected.includes(activeStr);
      const fromPool = pool.includes(activeStr);

      const droppingOnBar =
        overId === BAR_ID || selected.includes(overId) || overId === "__empty__";
      const droppingOnPool = overId === POOL_ID;

      if (fromBar && droppingOnBar) {
        if (selected.includes(overId) && overId !== activeStr) {
          const oldIndex = selected.indexOf(activeStr);
          const newIndex = selected.indexOf(overId);
          setSelected((prev) => arrayMove(prev, oldIndex, newIndex));
        }
        return;
      }

      if (fromPool && droppingOnBar) {
        setPool((prev) => prev.filter((i) => i !== activeStr));
        setSelected((prev) => [...prev, activeStr]);
        return;
      }

      if (fromBar && droppingOnPool) {
        setSelected((prev) => prev.filter((i) => i !== activeStr));
        setPool((prev) => [...prev, activeStr]);
        return;
      }
    };

    const handleRemove = (item: string) => {
      setSelected((prev) => prev.filter((i) => i !== item));
      setPool((prev) => [...prev, item]);
    };

    const handleCheck = () => {
      const correct = selected.join() === items.join();
      setChecked(true);
      setIsCorrect(correct);
      correct ? onSuccess() : onFail();
    };

    useImperativeHandle(ref, () => ({
      submit: handleCheck,
      reset: () => {
        setSelected([]);
        setPool(shuffleArray(items));
        setChecked(false);
        setIsCorrect(null);
      },
    }));

    // prevent scrolling during drag on mobile
    useEffect(() => {
      const preventScroll = (e: TouchEvent) => {
        if (isDragging) e.preventDefault();
      };
      document.addEventListener("touchmove", preventScroll, { passive: false });
      return () => {
        document.removeEventListener("touchmove", preventScroll);
      };
    }, [isDragging]);

    return (
      <div className="space-y-6" style={{ WebkitTextSizeAdjust: "100%" }}>
        {/* --- Header image --- */}
        <div className="w-full flex justify-center">
          <img
            src={HEADER_IMG}
            alt="Build the Ayah"
            className="w-full max-w-2xl rounded-xl shadow-sm"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* --- Hidden audio element (auto plays on load) --- */}
        <audio ref={audioRef} src={INTRO_AUDIO} preload="auto" />

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <BarDropZone
            selected={selected}
            handleRemove={handleRemove}
            activeId={activeId}
            cols={barCols}
            gapPx={barGapPx}
            chipWidth={chipWidth}
          />

          <PoolDropZone pool={pool} chipWidth={chipWidth} activeId={activeId} />

          <DragOverlay dropAnimation={null}>
            {activeId ? (
              <OverlayChip id={activeId} chipWidth={chipWidth} />
            ) : null}
          </DragOverlay>
        </DndContext>

        {checked && (
          <p
            className={`text-center font-semibold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? "✅ Correct!" : "❌ Try Again"}
          </p>
        )}
      </div>
    );
  }
);

/* -------------------- Drop Zones -------------------- */

function BarDropZone({
  selected,
  handleRemove,
  activeId,
  cols,
  gapPx,
  chipWidth,
}: {
  selected: string[];
  handleRemove: (id: string) => void;
  activeId: string | null;
  cols: number;
  gapPx: number;
  chipWidth: number;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: BAR_ID });

  const widthDesktop = chipWidth * 6 + gapPx * 5;
  const widthMobile = chipWidth * 3 + gapPx * 2;

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-row-reverse flex-wrap items-center border-2 border-dashed rounded-lg p-1 ${
        isOver ? "bg-blue-50" : "bg-gray-50"
      }`}
      style={{
        minHeight: 72,
        minWidth: "100%",
        maxWidth: `${widthDesktop}px`,
      }}
    >
      <SortableContext
        items={selected.length === 0 ? ["__empty__"] : selected}
        strategy={rectSortingStrategy}
      >
        {selected.length === 0 ? (
          <DropPlaceholder id="__empty__" />
        ) : (
          selected.map((item) => (
            <SortableItem
              key={item}
              id={item}
              onClick={() => handleRemove(item)}
              widthOverride={`${chipWidth}px`}
              hideWhileDragging={activeId === item}
            />
          ))
        )}
      </SortableContext>
      <style jsx>{`
        @media (max-width: 768px) {
          div[ref] {
            max-width: ${widthMobile}px !important;
          }
        }
      `}</style>
    </div>
  );
}

function PoolDropZone({
  pool,
  chipWidth,
  activeId,
}: {
  pool: string[];
  chipWidth: number;
  activeId: string | null;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: POOL_ID });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-wrap items-center justify-center gap-4 rounded-lg p-3 ${
        isOver ? "bg-blue-50" : "bg-transparent"
      }`}
      style={{ minHeight: 64 }}
    >
      {pool.map((item) => (
        <DraggableItem
          key={item}
          id={item}
          chipWidth={chipWidth}
          hideWhileDragging={activeId === item}
        />
      ))}
    </div>
  );
}

/* -------------------- Chips -------------------- */

const DraggableItem = ({
  id,
  chipWidth,
  hideWhileDragging,
}: {
  id: string;
  chipWidth: number;
  hideWhileDragging?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: undefined,
    transformOrigin: "center center",
    willChange: "transform",
    touchAction: "none",
    WebkitTouchCallout: "none",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    opacity: isDragging || hideWhileDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="relative flex-none inline-flex items-center justify-center text-center
                 h-10 text-base select-none appearance-none focus:outline-none
                 bg-white border rounded shadow cursor-move hover:bg-gray-100
                 transform-gpu origin-center overflow-hidden
                 max-w-[90vw]"
      title={id}
    >
      <div
        aria-hidden
        className="pointer-events-none hidden md:block"
        style={{ width: chipWidth, height: 40 }}
      />
      <span
        aria-hidden
        className="pointer-events-none inline-block md:hidden invisible whitespace-nowrap px-3"
      >
        {id}
      </span>
      <span className="absolute inset-0 flex items-center justify-center px-3 truncate">
        {id}
      </span>
    </div>
  );
};

const SortableItem = ({
  id,
  onClick,
  widthOverride,
  hideWhileDragging,
}: {
  id: string;
  onClick: () => void;
  widthOverride?: string;
  hideWhileDragging?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    transformOrigin: "center center",
    willChange: "transform",
    touchAction: "none",
    WebkitTouchCallout: "none",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    opacity: isDragging || hideWhileDragging ? 0 : 1,
  };

  const desktopWidth = widthOverride ? parseInt(widthOverride, 10) : undefined;

  return (
    <button
      type="button"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={onClick}
      style={style}
      className="relative flex-none inline-flex items-center justify-center text-center
                 h-10 text-base select-none appearance-none focus:outline-none
                 bg-blue-100 rounded shadow hover:bg-blue-200 transition
                 transform-gpu origin-center mx-1 mb-1 mt-1 overflow-hidden
                 max-w-[90vw]"
      title="Tap to remove, or drag back to pool"
    >
      <div
        aria-hidden
        className="pointer-events-none hidden md:block"
        style={{ width: desktopWidth, height: 40 }}
      />
      <span
        aria-hidden
        className="pointer-events-none inline-block md:hidden invisible whitespace-nowrap px-3"
      >
        {id}
      </span>
      <span className="absolute inset-0 flex items-center justify-center px-3 truncate">
        {id}
      </span>
    </button>
  );
};

/* -------------------- Overlay Chip -------------------- */

function OverlayChip({ id, chipWidth }: { id: string; chipWidth: number }) {
  return (
    <div
      style={{
        width: chipWidth,
        pointerEvents: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center center",
        willChange: "transform",
      }}
      className="flex-none text-center h-10 leading-none px-3 text-base
                 select-none bg-yellow-100 rounded shadow border transform-gpu origin-center"
    >
      <span className="truncate">{id}</span>
    </div>
  );
}

/* -------------------- Utilities -------------------- */

const DropPlaceholder = ({ id }: { id: string }) => {
  const { setNodeRef } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      className="w-20 h-10 border-2 border-dashed border-gray-300 rounded bg-white opacity-60"
    />
  );
};

const shuffleArray = (arr: string[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
