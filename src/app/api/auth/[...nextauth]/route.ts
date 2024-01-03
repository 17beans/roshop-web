import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";
import Naver from "next-auth/providers/naver";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
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
});

export { handler as GET, handler as POST };