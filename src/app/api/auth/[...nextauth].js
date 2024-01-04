import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";
import Naver from "next-auth/providers/naver";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Discord({
    //     clientId: process.env.DISCORD_CLIENT_ID!,
    //     clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    // }),
    // Naver({
    //     clientId: process.env.NAVER_CLIENT_ID!,
    //     clientSecret: process.env.NAVER_CLIENT_SECRET!,
    // }),
    // Google({
    //     clientId: process.env.GOOGLE_CLIENT_ID!,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // Kakao({
    //     clientId: process.env.KAKAO_CLIENT_ID!,
    //     clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    // }),

  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    }
  }
});

export { handler as GET, handler as POST };