import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { Account, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async signIn({ user, account }: { user: User; account: Account | null }) {
      try {
        if (account?.provider === "google" && user.email) {
          // Get role from cookie or default to student
          const cookieStore = await cookies();
          const roleCookie = cookieStore.get("pendingUserRole");
          const role = roleCookie?.value || "student";

          // Send user data to backend
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.image,
              role: role,
            }),
          });

          if (!response.ok) {
            console.error("Failed to save user to database");
            return false;
          }

          // Clear the cookie after use
          cookieStore.delete("pendingUserRole");

          return true;
        }
        return false;
      } catch (error) {
        console.error("Sign in error:", error);
        return false;
      }
    },

    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.role = token.role as string;
      }
      return session;
    },

    async jwt({ token, user, trigger }: { token: JWT; user?: User; trigger?: string }) {
      if (user) {
        token.email = user.email;

        // Fetch user role from backend
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile/${user.email}`);
          if (response.ok) {
            const data = await response.json();
            token.role = data.role || "student";
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          token.role = "student";
        }
      }
      return token;
    },
  },

  pages: {
    signIn: "/signup",
  },

  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };