import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LearningWorkspace } from "@/components/learning/learning-workspace"
import {
  getLearningCourse,
  learningSlugs,
} from "@/components/learning/learning-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return learningSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = getLearningCourse(slug)
  if (!course) return { title: "Không tìm thấy bài học | SDEV Team" }

  return {
    title: `Học ${course.title} | SDEV Team`,
    description: course.description,
  }
}

export default async function LearningPage({ params }: Props) {
  const { slug } = await params
  const course = getLearningCourse(slug)
  if (!course) notFound()

  return <LearningWorkspace course={course} />
}
