"use client"

import useFetch from "../../hooks/useFetch";



interface Course {
  _id: string;
  course_title: string;
  price?: number;
  instructor?: string;
  
}

export default function CoursesPage() {

  const { data, loading, error } = useFetch<Course>('/courses');

  if (loading) return <div>Loading courses...</div>;
  
  
  if (error) return <div>Something went wrong: {error.message}</div>;


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Courses List</h1>
      <ul className="space-y-2">
        {data.map((course) => (
       
          <li key={course._id} className="border p-2 rounded shadow-sm">
            {course.course_title}
          </li>
        ))}
      </ul>
      
      {data.length === 0 && <p>No courses found.</p>}
    </div>
  );
}