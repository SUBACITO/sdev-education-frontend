import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CourseDetail } from "@/components/courses/course-detail"
import { courses } from "../_data/courses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((item) => item.id === slug)

  if (!course) return { title: "Không tìm thấy khóa học | SDEV Team" }

  return {
    title: `${course.title} | SDEV Team`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = courses.find((item) => item.id === slug)
  if (!course) notFound()

  return <CourseDetail course={course} />
}
