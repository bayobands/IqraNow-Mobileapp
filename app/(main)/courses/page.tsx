import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { auth } from "@clerk/nextjs/server";

const DEMO_USER_ID = process.env.DEMO_USER_ID || "";
const HIDDEN_COURSE_IDS: string[] = (process.env.HIDDEN_COURSE_IDS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const CoursesPage = async () => {
  const { userId } = await auth();

  const [courses, userProgress] = await Promise.all([
    getCourses(),
    getUserProgress(),
  ]);

  // Convert IDs to string for comparison
  const visibleCourses =
    userId === DEMO_USER_ID
      ? courses
      : courses.filter((c) => !HIDDEN_COURSE_IDS.includes(String(c.id)));

  // Adjust activeCourseId if it points to a hidden course
  let activeCourseId = userProgress?.activeCourseId;
  if (
    activeCourseId &&
    HIDDEN_COURSE_IDS.includes(String(activeCourseId)) &&
    userId !== DEMO_USER_ID
  ) {
    activeCourseId = visibleCourses[0]?.id;
  }

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Select a Subject</h1>
      <List courses={visibleCourses} activeCourseId={activeCourseId} />
    </div>
  );
};

export default CoursesPage;
