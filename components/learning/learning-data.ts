import { courses } from "@/app/(auth)/courses/_data/courses"

export type LearningCourse = {
  slug: string
  title: string
  description: string
  technology: string
  lessons: readonly string[]
}

const javascriptCourse: LearningCourse = {
  slug: "javascript-nen-tang",
  title: "JavaScript nền tảng",
  description:
    "Nắm chắc các khái niệm JavaScript và luyện tập ngay trong trình duyệt.",
  technology: "JavaScript",
  lessons: [
    "Biến, kiểu dữ liệu & hàm đầu tiên",
    "Điều kiện & so sánh",
    "Mảng & vòng lặp",
    "Object, map & filter",
  ],
}

export function getLearningCourse(slug: string): LearningCourse | undefined {
  if (slug === javascriptCourse.slug) return javascriptCourse

  const course = courses.find((item) => item.id === slug)
  if (!course) return undefined

  return {
    slug: course.id,
    title: course.title,
    description: course.description,
    technology: course.stack[0],
    lessons: [`Khởi động với ${course.title}`, ...course.topics],
  }
}

export const learningSlugs = [
  javascriptCourse.slug,
  ...courses.map((course) => course.id),
]
