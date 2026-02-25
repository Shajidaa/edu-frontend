"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Find() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/tutors`);
      
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <div>Loading tutors...</div>;
console.log(data);

  return (
    <div>
      <h1>Tutors List</h1>
  
    </div>
  )
}