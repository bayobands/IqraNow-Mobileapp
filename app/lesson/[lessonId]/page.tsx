import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "../quiz";

type Props = {
  params: {
    lessonId: string;
  };
};

const LessonIdPage = async ({ params }: Props) => {
  const lessonId = Number(params.lessonId);

  const lessonData = getLesson(lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  const normalizedSubscription = userSubscription
    ? {
        isActive: userSubscription.isActive,
        currentPeriodEnd:
          userSubscription.stripeCurrentPeriodEnd instanceof Date
            ? userSubscription.stripeCurrentPeriodEnd.getTime()
            : Number(userSubscription.stripeCurrentPeriodEnd),
      }
    : null;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={normalizedSubscription}
    />
  );
};

export default LessonIdPage;
