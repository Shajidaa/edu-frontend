"use client"
import MyContainer from "@/app/(marketing)/components/share/MyContainer";

import useFetch from "../../hooks/useFetch";
import CourseCardHorizontal from "../../components/CourseCardHorizontal";
import CoursesHero from "./_components/coursesHero";

interface Course {
  _id: string;
  course_title: string;
  age_range: string;        
  grade_range: string;     
  curriculum_count: string;
  lessons: string;          
  duration: string;         
  description: string;     
  learning_outcomes: string[]; 
}

export default function CoursesPage() {
  const { data, loading, error } = useFetch<Course[]>('/courses');

  if (loading) return <div className="p-10 text-center text-green-600 font-bold">Loading courses...</div>;
  if (error) return <div className="p-10 text-red-500">Something went wrong: {error.message}</div>;

  return (
    <MyContainer className="p-8  min-h-screen">
    <CoursesHero/>
      
      <div className="grid grid-cols-1  gap-8">
        {data && data.map((course) => (
          <CourseCardHorizontal key={course._id} course={course} />
        ))}
      </div>
      
      {data?.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No courses found matching your criteria.</p>
      )}
    </MyContainer>
  );
}