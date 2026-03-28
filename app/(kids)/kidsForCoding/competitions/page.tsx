"use client";

import React, { useEffect, useState } from "react";
import CompetitionCard from "../../components/CompetitionCard";


export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/competitions`);
        const data = await response.json();
        // Since your controller returns { competitions: [...], meta: {...} }
        setCompetitions(data);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompetitions();
  }, []);
console.log(competitions);

  if (loading) return <div className="p-10 text-center text-emerald-600">Loading competitions...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Coding Competitions</h1>
      
      {/* Practice Section */}
      <h2 className="text-emerald-600 font-bold mb-4 border-b pb-2">Practice</h2>
      {competitions ? (
        competitions
          .filter((c) => c.status === "practice")
          .map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))
      ) : (
        <p className="text-slate-500">No practice competitions available.</p>
      )}

      {/* Completed Section */}
      <h2 className="text-slate-400 font-bold mt-10 mb-4 border-b pb-2">Completed</h2>
      {competitions ? (
        competitions
          .filter((c) => c.status === "completed")
          .map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))
      ) : (
        <p className="text-slate-500">No completed competitions available.</p>
      )}
    </div>
  );
}