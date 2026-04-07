"use client";
import MyContainer from "@/app/(after)/components/share/MyContainer";
import useFetch from "../hooks/useFetch";
import CourseCard from "./courseCard";

interface Course {
  _id: string;
  course_title: string;
  age_range: string;
  grade_range: string;
  lessons: string;
  duration: string;
  description: string;
  students_enrolled?: string;
  curriculum_count: string;
  learning_outcomes: string[];
}
export default function CoursesSection() {
     const { data} = useFetch<Course>('/courses');
     if (!data) {
        return <div>Loading...</div>;
      }
  return (
    <MyContainer className="py-12">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-bold text-center mb-8">Choose an AI & coding course that excites your child</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {data && data.map((course) => (
     <CourseCard key={course._id} course={course} />
    ))}
</div>
   
  </MyContainer>
)
}
