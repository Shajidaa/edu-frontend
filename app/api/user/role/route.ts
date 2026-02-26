import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Fetch user role from backend
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile/${session.user.email}`
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch user data' },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json({
            role: data.role || 'student',
            email: session.user.email,
            name: session.user.name,
        });
    } catch (error) {
        console.error('Error fetching user role:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
