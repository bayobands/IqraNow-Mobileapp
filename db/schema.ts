import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  json,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/* ------------------------------ Courses ------------------------------ */
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}));

/* ------------------------------- Units ------------------------------- */
export const units = pgTable("units", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  courseId: integer("courses_id")
    .references(() => courses.id, { onDelete: "cascade" })
    .notNull(),
  order: integer("order").notNull(),
});

export const unitsRelations = relations(units, ({ many, one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons),
}));

/* ------------------------------ Lessons ------------------------------ */
export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  unitId: integer("unit_id")
    .references(() => units.id, { onDelete: "cascade" })
    .notNull(),
  order: integer("order").notNull(),
});

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challenges: many(challenges),
}));

/* -------------------------- Challenge Types -------------------------- */
export const challengesEnum = pgEnum("type", [
  "SELECT",
  "ASSIST",
  "INTRO",
  "INTRO3",
  "AUDIO",
  "INFO",
  "INFO2",
  "INFO3",
  "INTRO2",
  "MATCHING",
  "ORDERING",
  "AUDIO_ASSIST",
  "VISUAL",
  "LISTING",
  "SPEAK",
]);

/* ----------------------------- Challenges ---------------------------- */
export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  lessonId: integer("lesson_id")
    .references(() => lessons.id, { onDelete: "cascade" })
    .notNull(),
  type: challengesEnum("type").notNull(),
  question: text("question").notNull(),
  order: integer("order").notNull(),

  // INTRO
  introImgSrc2: text("intro_img_src2"),
  introImgSrc: text("intro_img_src"),

  // AUDIO
  imageSrc: text("image_src"),
  audioSrc: text("audio_src"),

  // INFO
  infoimageSrc: text("infoimage_src"),
  infoimageSrc2: text("infoimage_src2"),

  // INFO2
  info2imageSrc: text("info2_image_src"),
  info2imageSrc_desktop: text("info2_image_src_desktop"),
  info2imageSrc_mobile: text("info2_image_src_mobile"),

  // VISUAL
  visual_image_src: text("visual_image_src"),

  // INFO3
  info3imageSrc_desktop: text("info3_image_src_desktop"),
  info3imageSrc_mobile: text("info3_image_src_mobile"),

  // INTRO2 (2–6 cycles of video/response)
  intro2_video_1: text("intro2_video_1"),
  intro2_response_1: text("intro2_response_1"),
  intro2_video_2: text("intro2_video_2"),
  intro2_response_2: text("intro2_response_2"),
  intro2_video_3: text("intro2_video_3"),
  intro2_response_3: text("intro2_response_3"),
  intro2_video_4: text("intro2_video_4"),
  intro2_response_4: text("intro2_response_4"),
  intro2_video_5: text("intro2_video_5"),
  intro2_response_5: text("intro2_response_5"),
  intro2_video_6: text("intro2_video_6"),
  intro2_response_6: text("intro2_response_6"),

  // ✅ SPEAK
  speak_text: text("speak_text"),
  speak_audio_ref: text("speak_audio_ref"),
  speak_lang: text("speak_lang"), // e.g., "ar-SA", "en-US"
  speak_transliteration: text("speak_transliteration"), // ✅ NEW — manual transliteration

  // JSON content for MATCHING, LISTING, etc.
  content: json("content"),
});

export const challengesRelations = relations(challenges, ({ one, many }) => ({
  lesson: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions),
  challengeProgress: many(challengeProgress),
  matchingPairs: many(matchingPairs),
}));

/* ------------------------- Challenge Options ------------------------- */
export const challengeOptions = pgTable("challengeOptions", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id, { onDelete: "cascade" })
    .notNull(),
  text: text("text").notNull(),
  correct: boolean("correct").notNull(),
  imageSrc: text("image_src"),
  audioSrc: text("audio_src"),
});

export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeOptions.challengeId],
    references: [challenges.id],
  }),
}));

/* --------------------------- Matching Pairs -------------------------- */
export const matchingPairs = pgTable("matching_pairs", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id")
    .notNull()
    .references(() => challenges.id, { onDelete: "cascade" }),
  term: text("term").notNull(),
  definition: text("definition").notNull(),
});

export const matchingPairsRelations = relations(matchingPairs, ({ one }) => ({
  challenge: one(challenges, {
    fields: [matchingPairs.challengeId],
    references: [challenges.id],
  }),
}));

/* ------------------------- Challenge Progress ------------------------ */
export const challengeProgress = pgTable("challengeProgress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id, { onDelete: "cascade" })
    .notNull(),
  completed: boolean("completed").notNull().default(false),
});

export const challengeProgressRelations = relations(
  challengeProgress,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeProgress.challengeId],
      references: [challenges.id],
    }),
  })
);

/* --------------------------- User Progress --------------------------- */
export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/blue_body_square.png"),
  activeCourseId: integer("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));

/* ------------------------- User Subscription ------------------------- */
export const userSubscription = pgTable("user_subscription", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  stripeCustomerId: text("stripe_customer_id").notNull().unique(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull().unique(),
  stripePriceId: text("stripe_price_id").notNull(),
  stripeCurrentPeriodEnd: timestamp("stripe_current_period_end", {
    withTimezone: true,
  }).notNull(),
  isActive: boolean("is_active").notNull().default(false),
});
