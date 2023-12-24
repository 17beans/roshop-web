import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";
import Naver from "next-auth/providers/naver";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

const handler = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        // Discord({
        //     clientId: process.env.DISCORD_CLIENT_ID as string,
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        // }),
        // Naver({
        //     clientId: process.env.NAVER_CLIENT_ID as string,
        //     clientSecret: process.env.NAVER_CLIENT_SECRET as string,
        // }),
        // Google({
        //     clientId: process.env.GOOGLE_CLIENT_ID as string,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        // }),
        // Kakao({
        //     clientId: process.env.KAKAO_CLIENT_ID as string,
        //     clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        // }),

    ],
});

export { handler as GET, handler as POST };