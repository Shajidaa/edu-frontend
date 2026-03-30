"use client";


 export const QUIZ_DATA: QuizCard[] = [
  {
    id: '1',
    title: 'Programming Basics',
    description: 'Master the fundamentals of logic and variables.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400',
    grade: '6 - 12',
    level: 'Beginner',
    color: 'bg-emerald-600',
    questions: [
      { id: 1, question: "Which symbol is used for comments in most languages?", options: ["//", "%%", "&&"], correctAnswer: "//" },
      { id: 2, question: "What is a 'variable' used for?", options: ["To store data", "To fix errors", "To close the program"], correctAnswer: "To store data" },
      { id: 3, question: "What is a 'string' in programming?", options: ["A sequence of characters", "A piece of hardware", "A type of loop"], correctAnswer: "A sequence of characters" },
      { id: 4, question: "Which of these is a boolean value?", options: ["True", "123", "Hello"], correctAnswer: "True" }
    ]
  },
  {
    id: '2',
    title: 'Introduction to Python',
    description: 'Learn the most popular language for AI and Data.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400',
    grade: '7 - 12',
    level: 'Beginner',
    color: 'bg-blue-900',
    questions: [
      { id: 1, question: "How do you output 'Hello World' in Python?", options: ["print('Hello World')", "console.log('Hello World')", "echo 'Hello World'"], correctAnswer: "print('Hello World')" },
      { id: 2, question: "Which collection is ordered and changeable?", options: ["List", "Set", "Tuple"], correctAnswer: "List" },
      { id: 3, question: "How do you start a 'for' loop in Python?", options: ["for x in y:", "for(x in y)", "foreach x in y"], correctAnswer: "for x in y:" }
    ]
  },
  {
    id: '3',
    title: 'ChatGPT and LLMs',
    description: 'Understanding how Generative AI actually works.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400',
    grade: '7 - 12',
    level: 'Beginner',
    color: 'bg-indigo-950',
    questions: [
      { id: 1, question: "What does GPT stand for?", options: ["Generative Pre-trained Transformer", "Global Program Text", "General Process Tool"], correctAnswer: "Generative Pre-trained Transformer" },
      { id: 2, question: "What is a 'Prompt' in AI?", options: ["The instruction you give to the AI", "The code the AI is written in", "The speed of the AI"], correctAnswer: "The instruction you give to the AI" }
    ]
  },
  {
    id: '4',
    title: 'Game Development',
    description: 'Build your own sprites and game logic.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400',
    grade: '1 - 8',
    level: 'Beginner',
    color: 'bg-amber-400',
    questions: [
      { id: 1, question: "What is a 'Sprite' in game design?", options: ["A 2D character or object", "A type of sound effect", "A game controller"], correctAnswer: "A 2D character or object" },
      { id: 2, question: "What is 'Collision Detection'?", options: ["Checking if two objects touch", "Speeding up the game", "Saving the game"], correctAnswer: "Checking if two objects touch" }
    ]
  },
  {
    id: '5',
    title: 'Website Development',
    description: 'Learn HTML, CSS, and modern JS.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400',
    grade: '6 - 12',
    level: 'Beginner',
    color: 'bg-rose-400',
    questions: [
      { id: 1, question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>", "<head>"], correctAnswer: "<h1>" },
      { id: 2, question: "Which CSS property changes text color?", options: ["color", "font-weight", "background-color"], correctAnswer: "color" }
    ]
  },
  {
    id: '6',
    title: 'Turtle Programming',
    description: 'Visual coding through block-based logic.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400',
    grade: '1 - 8',
    level: 'Beginner',
    color: 'bg-sky-500',
    questions: [
      { id: 1, question: "Which command moves the turtle forward?", options: ["forward()", "move()", "go()"], correctAnswer: "forward()" },
      { id: 2, question: "How do you change the turtle's direction?", options: ["right(90)", "turn(90)", "rotate(90)"], correctAnswer: "right(90)" }
    ]
  }
];


import  { useState } from 'react';
import Image from 'next/image';
import { LuPlay, LuGraduationCap,  LuX } from "react-icons/lu";
import { LucideBarChart } from 'lucide-react';
import { QuizCard } from '@/types';
import MyContainer from '@/app/(marketing)/components/share/MyContainer';


export default function QuizzesPage() {
  const [activeQuiz, setActiveQuiz] = useState<QuizCard | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selected: string) => {
    if (!activeQuiz) return;
    
    if (selected === activeQuiz.questions[currentQuestionIdx].correctAnswer) {
      setScore(prev => prev + 1);
    }

    const nextIdx = currentQuestionIdx + 1;
    if (nextIdx < activeQuiz.questions.length) {
      setCurrentQuestionIdx(nextIdx);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className=" bg-slate-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 border-b-4 border-orange-400 inline-block pb-1">
          Coding quizzes for kids and teens
        </h1>
        <p className="text-slate-600 mt-4">
          Great collection of fun and interactive coding quizzes to assess and acquire computer science knowledge.
        </p>
      </header>

      {/* Grid View */}
      {!activeQuiz && (
        <MyContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {QUIZ_DATA.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className={`${quiz.color} h-48 relative flex items-center justify-center p-6 text-white text-center`}>
                 <Image 
                    src={quiz.image} 
                    alt={quiz.title} 
                    fill 
                    className="object-cover opacity-40 mix-blend-overlay"
                 />
                 <h3 className="relative z-10 text-2xl font-bold">{quiz.title}</h3>
              </div>
              
              <div className="p-6 flex-grow">
                <h4 className="font-bold text-slate-800 mb-4">{quiz.title}</h4>
                <div className="space-y-2 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <LuGraduationCap className="text-slate-400" /> Grade: {quiz.grade}
                  </div>
                  <div className="flex items-center gap-2">
                    <LucideBarChart className="text-slate-400" /> {quiz.level} level
                  </div>
                </div>

                <button 
                  onClick={() => setActiveQuiz(quiz)}
                  className="w-full py-2 px-4 border-2 border-rose-500 text-rose-500 font-bold rounded-lg hover:bg-rose-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <LuPlay fill="currentColor" size={12} /> Play now
                </button>
              </div>
            </div>
          ))}
        </MyContainer>
      )}

      {/* MCQ Quiz Modal/Overlay */}
      {activeQuiz && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-100 border-b flex justify-between items-center">
              <span className="font-bold text-slate-700">{activeQuiz.title}</span>
              <button onClick={resetQuiz} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                <LuX size={20} />
              </button>
            </div>

            <div className="p-8">
              {!showResults ? (
                <>
                  <div className="mb-8">
                    <span className="text-sm font-medium text-emerald-600 mb-2 block">
                      Question {currentQuestionIdx + 1} of {activeQuiz.questions.length}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-800">
                      {activeQuiz.questions[currentQuestionIdx].question}
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {activeQuiz.questions[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="text-left p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-medium text-slate-700"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold mb-2">Quiz Complete! 🎉</h2>
                  <p className="text-xl text-slate-600 mb-8">
                    You scored <span className="text-emerald-600 font-bold">{score}</span> out of {activeQuiz.questions.length}
                  </p>
                  <button 
                    onClick={resetQuiz}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Back to Quizzes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}