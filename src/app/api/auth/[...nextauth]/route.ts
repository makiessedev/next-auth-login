import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    })
  ],
  pages: {
    signIn: '/login'
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }