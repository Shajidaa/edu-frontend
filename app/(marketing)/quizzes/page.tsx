"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuPlay, LuGraduationCap, LuX, LuTrophy, LuPartyPopper } from "react-icons/lu";
import { LucideBarChart } from 'lucide-react';
import Confetti from 'react-confetti'; 
import { QuizCard } from '@/types';
import MyContainer from '@/app/(after)/components/share/MyContainer';

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

export default function QuizzesPage() {
  const [activeQuiz, setActiveQuiz] = useState<QuizCard | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
// Confetti state for perfect score celebration
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
  
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };


    handleResize();


    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const isPerfectScore = activeQuiz && score === activeQuiz.questions.length;

  return (
    <div className="bg-slate-50 p-4 md:p-8 min-h-screen">

      {showResults && isPerfectScore && (
        <Confetti width={windowSize.width} 
        height={windowSize.height} numberOfPieces={300} recycle={false}
        run={showResults && isPerfectScore} />
      )}

      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 border-b-4 border-orange-400 inline-block pb-1">
          Coding quizzes for kids and teens
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-4 max-w-2xl mx-auto">
          Great collection of fun and interactive coding quizzes to assess and acquire computer science knowledge.
        </p>
      </header>

      {/* Grid View */}
      {!activeQuiz && (
        <MyContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {QUIZ_DATA.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className={`${quiz.color} h-40 md:h-48 relative flex items-center justify-center p-6 text-white text-center`}>
                 <Image 
                    src={quiz.image} 
                    alt={quiz.title} 
                    fill 
                    className="object-cover opacity-40 mix-blend-overlay"
                 />
                 <h3 className="relative z-10 text-xl md:text-2xl font-bold">{quiz.title}</h3>
              </div>
              
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 mb-3">{quiz.title}</h4>
                  <div className="space-y-2 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <LuGraduationCap className="text-slate-400" /> Grade: {quiz.grade}
                    </div>
                    <div className="flex items-center gap-2">
                      <LucideBarChart className="text-slate-400" /> {quiz.level} level
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveQuiz(quiz)}
                  className="w-full py-2.5 px-4 border-2 border-rose-500 text-rose-500 font-bold rounded-lg hover:bg-rose-500 hover:text-white transition-colors flex items-center justify-center gap-2"
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
        <div className="fixed inset-0 mt-45 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-4 bg-white border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <span className="font-bold text-slate-700 truncate mr-2">{activeQuiz.title}</span>
              <button onClick={resetQuiz} className="p-2 hover:bg-slate-200 rounded-full transition-colors flex-shrink-0">
                <LuX size={20} />
              </button>
            </div>

            <div className="p-5 md:p-8">
              {!showResults ? (
                <>
                  <div className="mb-6 md:mb-8">
                    <span className="text-xs md:text-sm font-medium text-emerald-600 mb-2 block">
                      Question {currentQuestionIdx + 1} of {activeQuiz.questions.length}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                      {activeQuiz.questions[currentQuestionIdx].question}
                    </h2>
                  </div>

                  <div className="grid gap-3 md:gap-4">
                    {activeQuiz.questions[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="text-left p-3 md:p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-medium text-slate-700 text-sm md:text-base"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : isPerfectScore ? (
            
                <div className="text-center py-4 md:py-6 flex flex-col items-center">
                  <div className="bg-amber-100 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 animate-bounce flex-shrink-0">
                    <LuTrophy size={40} className="text-amber-500" />
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black mb-2 text-slate-800 flex items-center justify-center gap-2 flex-wrap">
                    <span>You are a Rockstar!</span> 
                    <LuPartyPopper className="text-pink-500 shrink-0" size={28} />
                  </h2>
                  
                  <p className="text-sm md:text-lg text-slate-600 mb-2">
                    You answered all questions perfectly!
                  </p>
                  
                  <p className="text-lg md:text-2xl mb-6 md:mb-8 font-bold text-emerald-600 bg-emerald-50 px-5 md:px-6 py-1.5 md:py-2 rounded-full inline-block">
                    Score: {score} / {activeQuiz.questions.length} 
                  </p>
                  
                  <button 
                    onClick={resetQuiz}
                    className="w-full md:w-auto bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-200"
                  >
                    Play Another Quiz
                  </button>
                </div>
              ) : (
            
                <div className="text-center py-6 md:py-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">Quiz Complete! 🎉</h2>
                  <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8">
                    You scored <span className="text-rose-500 font-bold">{score}</span> out of {activeQuiz.questions.length}
                  </p>
                  <button 
                    onClick={resetQuiz}
                    className="w-full md:w-auto bg-slate-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
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