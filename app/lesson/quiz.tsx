"use client";

import { challengeOptions, challenges as challengesTable } from "@/db/schema";
import { useState, useTransition, useRef, useEffect, useMemo } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengePropgress } from "@/actions/challenge-progress";
import Confetti from "react-confetti";
import { useAudio, useWindowSize, useMount } from "react-use";
import { reduceHearts } from "@/actions/user-progress";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "../store/use-hearts-modal";
import { usePracticeModal } from "../store/use-practice-modal";
import { IntroBubble } from "./intro-bubble";
import { AudioBubble } from "./AudioBubble";
import { InfoBubble } from "./info-bubble";
import { Info2Bubble } from "./info2-bubble";
import { Info3Bubble } from "./info3-bubble";

import { Intro2Bubble } from "./intro2-bubble";
import { Intro3Bubble } from "./intro3-bubble";
import Matching, { MatchingHandle } from "./matching";
import { OrderingChallenge } from "./ordering";
import { ListingChallenge, ListingHandle } from "./listing";
import { ImageBubble } from "./image-bubble";
import SpeakChallenge from "./SpeakChallenge"; // ✅ SPEAK UI

/* ---------------- Types ---------------- */

type ChallengeWithExtras = typeof challengesTable.$inferSelect & {
  completed: boolean;
  challengeOptions: typeof challengeOptions.$inferSelect[];
  introImgSrc?: string | null;
  introImgSrc2?: string | null;

  // INTRO2 flat props (optional)
  intro2_video_1?: string | null;
  intro2_response_1?: string | null;
  intro2_video_2?: string | null;
  intro2_response_2?: string | null;
  intro2_video_3?: string | null;
  intro2_response_3?: string | null;
  intro2_video_4?: string | null;
  intro2_response_4?: string | null;
  intro2_video_5?: string | null;
  intro2_response_5?: string | null;
  intro2_video_6?: string | null;
  intro2_response_6?: string | null;

  // ✅ SPEAK fields (optional)
  speak_text?: string | null;
  speak_audio_ref?: string | null;
  speak_lang?: string | null;
  speak_transliteration?: string | null; // ✅ NEW
};

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: ChallengeWithExtras[];
  userSubscription: {
    isActive: boolean;
    currentPeriodEnd: number;
  } | null;
};

/* ---------------- Component ---------------- */

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) {
      openPracticeModal();
    }
  });

  const { width, height } = useWindowSize();
  const router = useRouter();
  const [finishAudio] = useAudio({ src: "/Finish.mp3", autoPlay: true });

  const [correctAudio, , correctControls] = useAudio({ src: "/Correct.mp3" });
  const [incorrectAudio, , incorrectControls] = useAudio({ src: "/Error.mp3" });
  const [nextAudio, , nextControls] = useAudio({ src: "/swish.mp3" });

  const [lessonId] = useState(initialLessonId);
  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() =>
    initialPercentage === 100 ? 0 : initialPercentage
  );
  const [challenges] = useState<Props["initialLessonChallenges"]>(
    initialLessonChallenges
  );
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((c) => !c.completed);
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

  // ✅ INTRO2 completion flag
  const [intro2Done, setIntro2Done] = useState(false);

  // Reset INTRO2 flag whenever challenge changes
  useEffect(() => {
    setIntro2Done(false);
    setStatus("none");
    setSelectedOption(undefined);
  }, [activeIndex]);

  const challenge = challenges[activeIndex];

  const shuffleArray = <T,>(array: T[]): T[] =>
    [...array].sort(() => Math.random() - 0.5);

  const options = useMemo(() => {
    return challenge?.challengeOptions
      ? shuffleArray(challenge.challengeOptions)
      : [];
  }, [challenge?.id]); // re-shuffle when challenge changes

  const matchingRef = useRef<MatchingHandle>(null);
  const orderingRef = useRef<{ submit: () => void; reset: () => void }>(null);
  const listingRef = useRef<ListingHandle>(null);

  const onNext = () => {
    nextControls.play();
    setStatus("none");
    setSelectedOption(undefined);
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };

  const onContinue = () => {
    /* ---------- Matching ---------- */
    if (challenge.type === "MATCHING") {
      if (hearts === 0) {
        openHeartsModal();
        return;
      }

      if (status === "correct") {
        onNext();
      } else if (status === "wrong") {
        matchingRef.current?.reset();
        setStatus("none");
      } else {
        matchingRef.current?.submit();
      }
      return;
    }

    /* ---------- Ordering ---------- */
    if (challenge.type === "ORDERING") {
      if (hearts === 0) {
        openHeartsModal();
        return;
      }
      const currentChallengeId = challenge.id;

      if (status === "correct") {
        requestAnimationFrame(() => {
          if (challenge.id === currentChallengeId) {
            onNext();
          }
        });
        return;
      }

      if (status === "wrong") {
        orderingRef.current?.reset();
        setStatus("none");
        return;
      }

      orderingRef.current?.submit();
      return;
    }

    /* ---------- Listing ---------- */
    if (challenge.type === "LISTING") {
      if (hearts === 0) {
        openHeartsModal();
        return;
      }

      const currentChallengeId = challenge.id;

      if (status === "correct") {
        requestAnimationFrame(() => {
          if (challenge.id === currentChallengeId) {
            onNext();
          }
        });
        return;
      }

      if (status === "wrong") {
        listingRef.current?.reset();
        setStatus("none");
        return;
      }

      listingRef.current?.submit();
      return;
    }

    /* ---------- INFO / INFO2 / INFO3 ---------- */
    if (["INFO", "INFO2", "INFO3"].includes(challenge.type)) {
      startTransition(() => {
        upsertChallengePropgress(challenge.id).then(() => {
          setPercentage((prev) => prev + 100 / challenges.length);
          onNext();
          router.refresh();
        });
      });
      return;
    }

    /* ---------- INTRO2 (NEW) ---------- */
    if (challenge.type === "INTRO2") {
      if (!intro2Done) return;

      startTransition(() => {
        upsertChallengePropgress(challenge.id).then(() => {
          setPercentage((prev) => prev + 100 / challenges.length);
          onNext();
          router.refresh();
        });
      });
      return;
    }

    /* ---------- SPEAK (NEW) ---------- */
    if (challenge.type === "SPEAK") {
      // Currently treated as practice-only; "Next" completes it.
      startTransition(() => {
        upsertChallengePropgress(challenge.id).then(() => {
          setPercentage((prev) => prev + 100 / challenges.length);
          onNext();
          router.refresh();
        });
      });
      return;
    }

    /* ---------- SELECT / ASSIST / AUDIO / AUDIO_ASSIST / VISUAL ---------- */
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      return;
    }

    const correctOption = options.find((option) => option.correct);
    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengePropgress(challenge.id).then((response) => {
          if (response?.error === "hearts") {
            openHeartsModal();
            return;
          }
          correctControls.play();
          setStatus("correct");
          setPercentage((prev) => prev + 100 / challenges.length);
          if (
            initialPercentage === 100 &&
            !["INTRO", "INFO", "INFO2", "INFO3"].includes(challenge.type)
          ) {
            setHearts((prev) => Math.min(prev + 1, 5));
          }
        });
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id).then((response) => {
          if (response?.error === "hearts") {
            openHeartsModal();
            return;
          }
          incorrectControls.play();
          setStatus("wrong");
          if (
            !response?.error &&
            !["INTRO", "INFO", "INFO2"].includes(challenge.type)
          ) {
            setHearts((prev) => Math.max(prev - 1, 0));
          }
        });
      });
    }
  };

  /* ---------- Completion Screen ---------- */
  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
        />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 mx-auto text-center items-center justify-center h-full">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-700">
            Great job! <br /> You've completed the lesson. ما شاء الله
          </h1>
          <div className="flex flex-col items-center gap-y-6 w-full">
            <div className="rounded-2xl border-2 bg-neutral-200 border-neutral-300 w-full max-w-md">
              <div className="p-2 text-black rounded-t-xl font-bold text-center uppercase text-sm bg-neutral-300">
                🎉 Celebration
              </div>
              <div className="rounded-2xl bg-white flex items-center justify-center p-6">
                <video
                  src="/dancing_animation.mp4"
                  width={200}
                  height={200}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-4 w-full max-w-md">
              <ResultCard
                variant="points"
                value={initialLessonChallenges.length * 10}
              />
              <ResultCard variant="hearts" value={hearts} />
            </div>
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    );
  }

  /* ---------- Title handling ---------- */
  const title = [
    "ASSIST",
    "INTRO",
    "INTRO2",
    "INTRO3",
    "VISUAL",
    "AUDIO",
    "AUDIO_ASSIST",
    "INFO",
    "INFO2",
    "INFO3",
    "MATCHING",
    "ORDERING",
    "LISTING",
    "SPEAK", // hide big title for speak too
  ].includes(challenge.type)
    ? ""
    : challenge.question;

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      {nextAudio}

      <div className="sticky top-0 z-50 bg-white">
        <Header
          hearts={hearts}
          percentage={percentage}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </div>

      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:minh-[350px] lg:w-[800px] w-[600] px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>

            <div>
              {/* SELECT */}
              {challenge.type === "SELECT" && (
                <Challenge
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                  type="SELECT"
                />
              )}

              {/* ASSIST */}
              {challenge.type === "ASSIST" && (
                <>
                  <QuestionBubble question={challenge.question} />
                  <Challenge
                    options={options}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type="ASSIST"
                  />
                </>
              )}

              {/* INTRO */}
              {challenge.type === "INTRO" &&
                (challenge.introImgSrc || challenge.introImgSrc2) && (
                  <>
                    <IntroBubble
                      question={challenge.question}
                      introImgSrc={challenge.introImgSrc ?? undefined}
                      introImgSrc2={challenge.introImgSrc2 ?? undefined}
                    />
                    <Challenge
                      options={options}
                      onSelect={onSelect}
                      status={status}
                      selectedOption={selectedOption}
                      disabled={pending}
                      type="ASSIST"
                    />
                  </>
                )}

              {/* INTRO2 */}
              {challenge.type === "INTRO2" && (
                <>
                  <Intro2Bubble
                    INTRO2_video_1={challenge.intro2_video_1 ?? undefined}
                    INTRO2_response_1={challenge.intro2_response_1 ?? undefined}
                    INTRO2_video_2={challenge.intro2_video_2 ?? undefined}
                    INTRO2_response_2={challenge.intro2_response_2 ?? undefined}
                    INTRO2_video_3={challenge.intro2_video_3 ?? undefined}
                    INTRO2_response_3={challenge.intro2_response_3 ?? undefined}
                    INTRO2_video_4={challenge.intro2_video_4 ?? undefined}
                    INTRO2_response_4={challenge.intro2_response_4 ?? undefined}
                    INTRO2_video_5={challenge.intro2_video_5 ?? undefined}
                    INTRO2_response_5={challenge.intro2_response_5 ?? undefined}
                    INTRO2_video_6={challenge.intro2_video_6 ?? undefined}
                    INTRO2_response_6={challenge.intro2_response_6 ?? undefined}
                    onDone={() => setIntro2Done(true)}
                  />
                  <Challenge
                    options={options}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type="ASSIST"
                  />
                </>
              )}

              {/* INTRO3 */}
              {challenge.type === "INTRO3" && (
                <>
                  <Intro3Bubble question={challenge.question} />
                  <Challenge
                    options={options}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type="ASSIST"
                  />
                </>
              )}

              {/* AUDIO */}
              {challenge.type === "AUDIO" &&
                challenge.imageSrc &&
                challenge.audioSrc && (
                  <>
                    <AudioBubble
                      question={challenge.question}
                      imageSrc={challenge.imageSrc}
                      audioSrc={challenge.audioSrc}
                    />
                    <Challenge
                      options={options}
                      onSelect={onSelect}
                      status={status}
                      selectedOption={selectedOption}
                      disabled={pending}
                      type="AUDIO"
                    />
                  </>
                )}

              {/* AUDIO_ASSIST */}
              {challenge.type === "AUDIO_ASSIST" && (
                <>
                  <AudioBubble
                    question={challenge.question}
                    imageSrc={challenge.imageSrc!}
                    audioSrc={challenge.audioSrc!}
                  />
                  <Challenge
                    options={options}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type="AUDIO_ASSIST"
                  />
                </>
              )}

              {/* VISUAL */}
              {challenge.type === "VISUAL" && challenge.visual_image_src && (
                <>
                  <ImageBubble
                    question={challenge.question}
                    visualImageSrc={challenge.visual_image_src}
                  />
                  <Challenge
                    options={options}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type="ASSIST"
                  />
                </>
              )}

              {/* INFO */}
              {challenge.type === "INFO" &&
                (challenge.infoimageSrc || challenge.infoimageSrc2) && (
                  <InfoBubble
                    question={challenge.question}
                    infoimageSrc={challenge.infoimageSrc ?? undefined}
                    infoimageSrc2={challenge.infoimageSrc2 ?? undefined}
                  />
                )}

              {/* INFO2 */}
              {challenge.type === "INFO2" &&
                challenge.info2imageSrc_desktop &&
                challenge.info2imageSrc_mobile &&
                challenge.audioSrc && (
                  <Info2Bubble
                    info2imageSrc_desktop={challenge.info2imageSrc_desktop}
                    info2imageSrc_mobile={challenge.info2imageSrc_mobile}
                    audioSrc={challenge.audioSrc}
                  />
                )}

              {/* INFO3 */}
              {challenge.type === "INFO3" &&
                challenge.info3imageSrc_desktop &&
                challenge.info3imageSrc_mobile && (
                  <Info3Bubble
                    info3imageSrc_desktop={challenge.info3imageSrc_desktop}
                    info3imageSrc_mobile={challenge.info3imageSrc_mobile}
                  />
                )}

              {/* MATCHING */}
              {challenge.type === "MATCHING" && (
                <>
                  <p className="text-2xl lg:text-3xl font-bold text-center mb-6">
                    {challenge.question}
                  </p>

                  <Matching
                    ref={matchingRef}
                    pairs={(challenge.content as any).pairs}
                    correctPairs={(challenge.content as any).pairs}
                    onSuccess={() => {
                      startTransition(() => {
                        upsertChallengePropgress(challenge.id).then(() => {
                          correctControls.play();
                          setStatus("correct");
                          setPercentage(
                            (prev) => prev + 100 / challenges.length
                          );
                        });
                      });
                    }}
                    onFail={() => {
                      incorrectControls.play();
                      setStatus("wrong");
                      startTransition(() => {
                        reduceHearts(challenge.id).then((response) => {
                          if (response?.error === "hearts") {
                            openHeartsModal();
                            return;
                          }
                          setHearts((prev) => Math.max(prev - 1, 0));
                        });
                      });
                    }}
                  />
                </>
              )}

              {/* ORDERING */}
{challenge.type === "ORDERING" && (
  <>
    {/* Question intentionally hidden for ORDERING */}
    <OrderingChallenge
      ref={orderingRef}
      items={(challenge.content as { items: string[] }).items}
      disabled={pending}
      onSuccess={() => {
        correctControls.play();
        setStatus("correct");
        setPercentage((prev) => prev + 100 / challenges.length);
        startTransition(() => {
          upsertChallengePropgress(challenge.id);
        });
      }}
      onFail={() => {
        incorrectControls.play();
        setStatus("wrong");
        startTransition(() => {
          reduceHearts(challenge.id).then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            setHearts((prev) => Math.max(prev - 1, 0));
          });
        });
      }}
    />
  </>
)}


              {/* LISTING */}
              {challenge.type === "LISTING" && (
                <ListingChallenge
                  ref={listingRef}
                  question={challenge.question}
                  items={(challenge.content as { listingItems: string[] })
                    .listingItems}
                  disabled={pending}
                  onSuccess={() => {
                    correctControls.play();
                    setStatus("correct");
                    setPercentage((prev) => prev + 100 / challenges.length);
                    startTransition(() => {
                      upsertChallengePropgress(challenge.id);
                    });
                  }}
                  onFail={() => {
                    incorrectControls.play();
                    setStatus("wrong");
                    startTransition(() => {
                      reduceHearts(challenge.id).then((response) => {
                        if (response?.error === "hearts") {
                          openHeartsModal();
                          return;
                        }
                        setHearts((prev) => Math.max(prev - 1, 0));
                      });
                    });
                  }}
                />
              )}

              {/* SPEAK (NEW) */}
              {challenge.type === "SPEAK" && (
                <SpeakChallenge
                  text={challenge.speak_text ?? challenge.question}
                  transliteration={challenge.speak_transliteration ?? undefined} // ✅ pass transliteration
                  audioRef={challenge.speak_audio_ref ?? undefined}
                  lang={challenge.speak_lang ?? undefined}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer
        disabled={pending || (challenge.type === "INTRO2" && !intro2Done)}
        status={
          ["INFO", "INFO2", "INFO3", "INTRO2", "SPEAK"].includes(challenge.type)
            ? "none"
            : status
        }
        onCheck={onContinue}
        buttonLabel={
          ["INFO", "INFO2", "INFO3", "INTRO2", "SPEAK"].includes(
            challenge.type
          )
            ? "Next"
            : undefined
        }
        lessonId={lessonId}
      />
    </>
  );
};
