import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Get the token from the request
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
    });

    // Check if user is trying to access dashboard routes
    if (pathname.startsWith('/dashboard')) {
        // If not logged in, redirect to signup
        if (!token) {
            const signInUrl = new URL('/signup', request.url);
            signInUrl.searchParams.set('callbackUrl', pathname);
            return NextResponse.redirect(signInUrl);
        }

        // Get user role from token
        const userRole = token.role as string;

        // Check if student is trying to access tutor routes
        if (pathname.startsWith('/dashboard/tutor') && userRole !== 'tutor') {
            return NextResponse.redirect(new URL('/dashboard/student', request.url));
        }

        // Check if tutor is trying to access student routes
        if (pathname.startsWith('/dashboard/student') && userRole !== 'student') {
            return NextResponse.redirect(new URL('/dashboard/tutor', request.url));
        }

        // Redirect from /dashboard to role-specific dashboard
        if (pathname === '/dashboard') {
            if (userRole === 'tutor') {
                return NextResponse.redirect(new URL('/dashboard/tutor', request.url));
            } else if (userRole === 'student') {
                return NextResponse.redirect(new URL('/dashboard/student', request.url));
            }
        }
    }

    return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
};
