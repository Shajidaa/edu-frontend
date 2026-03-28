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
interface Competition {
  id: number;
  title: string;
  host: string;
  time_info: string; 
  team_size: string; 
  grade_range: string; 
  status: 'practice' | 'completed';
  prize?: string | null;
}