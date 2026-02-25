"use client";

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface UserData {
    _id: string;
    name: string;
    email: string;
    image?: string;
    role: 'student' | 'tutor';
}

export function useUserRole() {
    const { data: session } = useSession();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUserData() {
            if (!session?.user?.email) {
                setLoading(false);
                return;
            }

            try {

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/email/${session.user.email}`
                );

                if (!response.ok) {

                    const studentResponse = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/student`
                    );
                    const tutorResponse = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/tutors`
                    );

                    if (studentResponse.ok) {
                        const students = await studentResponse.json();
                        const user = students.find((u: UserData) => u.email === session.user?.email);
                        if (user) {
                            setUserData(user);
                            setLoading(false);
                            return;
                        }
                    }

                    if (tutorResponse.ok) {
                        const tutors = await tutorResponse.json();
                        const user = tutors.find((u: UserData) => u.email === session.user?.email);
                        if (user) {
                            setUserData(user);
                            setLoading(false);
                            return;
                        }
                    }

                    throw new Error('User not found');
                }

                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                console.error('Error fetching user data:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, [session?.user?.email]);

    return { userData, loading, error, role: userData?.role || 'student' };
}
