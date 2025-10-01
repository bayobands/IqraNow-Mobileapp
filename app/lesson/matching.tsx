"use client";

import {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";

type Pair = { term: string; definition: string };

export type MatchingProps = {
  pairs: Pair[];
  correctPairs: Pair[];
  onSuccess: () => void;
  onFail: () => void;
};

export type MatchingHandle = {
  submit: () => void;
  reset: () => void;
};

// 🎨 Match pair colors
const matchColors = [
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-pink-200",
  "bg-purple-200",
  "bg-orange-200",
  "bg-red-200",
];

// 🎵 Sound
const audio = typeof window !== "undefined" ? new Audio("/pop.mp3") : null;
const playPop = () => {
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
};

const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ✅ detect if string has Arabic characters
const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

const Matching = forwardRef<MatchingHandle, MatchingProps>(
  ({ pairs, correctPairs, onSuccess, onFail }, ref) => {
    const [selected, setSelected] = useState<{ type: "term" | "definition"; value: string } | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [matchOrder, setMatchOrder] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [shuffledDefinitions, setShuffledDefinitions] = useState<string[]>([]);

    useEffect(() => {
      const defs = pairs.map((p) => p.definition);
      setShuffledDefinitions(shuffle(defs));
      setMatches({});
      setMatchOrder([]);
      setSelected(null);
      setError(null);
    }, [pairs]);

    const validateMatches = () => {
      for (const { term, definition } of correctPairs) {
        if (matches[term] !== definition) return false;
      }
      return true;
    };

    const handleSubmit = () => {
      if (Object.keys(matches).length !== pairs.length) return;
      if (validateMatches()) {
        onSuccess();
      } else {
        setError("Some matches are incorrect.");
        onFail();
      }
    };

    useImperativeHandle(ref, () => ({
      submit: handleSubmit,
      reset: () => {
        setMatches({});
        setSelected(null);
        setMatchOrder([]);
        setError(null);
        const defs = pairs.map((p) => p.definition);
        setShuffledDefinitions(shuffle(defs));
      },
    }));

    const unpairTerm = (term: string) => {
      setMatches((prev) => {
        if (!(term in prev)) return prev;
        const next = { ...prev };
        delete next[term];
        return next;
      });
      setMatchOrder((prev) => prev.filter((t) => t !== term));
      setSelected(null);
      setError(null);
      playPop();
    };

    const findTermForDefinition = (definition: string) =>
      Object.keys(matches).find((t) => matches[t] === definition) || null;

    const pairItems = (term: string, definition: string) => {
      setMatches((prev) => {
        const next = { ...prev };

        // If this definition is already used, unassign first
        const existingTerm = Object.keys(next).find((t) => next[t] === definition);
        if (existingTerm && existingTerm !== term) {
          delete next[existingTerm];
          setMatchOrder((prevOrder) => prevOrder.filter((t) => t !== existingTerm));
        }

        next[term] = definition;
        return next;
      });

      setMatchOrder((prev) => (prev.includes(term) ? prev : [...prev, term]));
      setSelected(null);
      setError(null);
      playPop();
    };

    const handleTermClick = (term: string) => {
      // Unpair if clicked with no selection
      if (!selected && term in matches) {
        unpairTerm(term);
        return;
      }

      // If a definition was selected → make pair
      if (selected?.type === "definition") {
        pairItems(term, selected.value);
        return;
      }

      // Toggle selection
      setSelected(
        selected?.type === "term" && selected.value === term ? null : { type: "term", value: term }
      );
      playPop();
    };

    const handleDefinitionClick = (definition: string) => {
      const owner = findTermForDefinition(definition);

      // Unpair if clicked with no selection
      if (!selected && owner) {
        unpairTerm(owner);
        return;
      }

      // If a term was selected → make pair
      if (selected?.type === "term") {
        pairItems(selected.value, definition);
        return;
      }

      // Toggle selection
      setSelected(
        selected?.type === "definition" && selected.value === definition
          ? null
          : { type: "definition", value: definition }
      );
      playPop();
    };

    const getColorClass = (term: string) => {
      const index = matchOrder.indexOf(term);
      return index !== -1 ? matchColors[index % matchColors.length] : "bg-white";
    };

    return (
      <div className="space-y-6 font-sans">
        <div className="grid grid-cols-2 gap-6">
          {/* Terms */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl text-center font-bold">Terms</h3>
            {pairs.map(({ term }) => {
              const isMatched = term in matches;
              const isSelected = selected?.type === "term" && selected.value === term;

              const className = isSelected
                ? "bg-blue-200"
                : isMatched
                ? getColorClass(term)
                : "bg-white";

              const textClass = isArabic(term)
                ? "text-2xl md:text-3xl"
                : "text-lg md:text-xl";

              return (
                <button
                  key={term}
                  onClick={() => handleTermClick(term)}
                  className={`w-full p-3 md:p-4 border rounded-xl shadow-sm transition leading-relaxed ${className}`}
                  aria-pressed={isSelected}
                >
                  <span className={`${textClass} block leading-snug`}>
                    {term}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Definitions */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl text-center font-bold">Definitions</h3>
            {shuffledDefinitions.map((definition) => {
              const matchedTerm = findTermForDefinition(definition);
              const isSelected = selected?.type === "definition" && selected.value === definition;

              const colorClass = isSelected
                ? "bg-blue-200"
                : matchedTerm
                ? getColorClass(matchedTerm)
                : "bg-white";

              const textClass = isArabic(definition)
                ? "text-2xl md:text-3xl"
                : "text-lg md:text-xl";

              return (
                <button
                  key={definition}
                  onClick={() => handleDefinitionClick(definition)}
                  className={`w-full p-3 md:p-4 border rounded-xl shadow-sm transition leading-relaxed ${colorClass}`}
                  aria-pressed={isSelected}
                >
                  <span className={`${textClass} block leading-snug`}>
                    {definition}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {error && (
          <p className="text-center text-red-600 font-semibold text-lg">{error}</p>
        )}
      </div>
    );
  }
);

export default Matching;
