"use client";
import MyContainer from "@/app/(marketing)/components/share/MyContainer";
import useFetch from "../hooks/useFetch";
import CourseCard from "./courseCard";

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
