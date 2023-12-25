"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { signIn, useSession } from "next-auth/react";
import { DiscordLoginButton, GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";



const GetPlatformNameCamelCase = (PlatformName: string) => {
    if (PlatformName == 'github') return 'GitHub';
    if (PlatformName == 'discord') return 'Discord';
    if (PlatformName == 'google') return 'Google';
    if (PlatformName == 'naver') return 'Naver';
    if (PlatformName == 'kakao') return 'Kakao';
}

const SignInButton = ({ PlatformName, buttonColor, textColor = "text-white" }: { PlatformName: string, buttonColor: string, textColor: string }) => {
    return (
        <div>
            <button
                className={`mt-4 ${buttonColor} ${textColor} px-6 py-3 rounded-lg`}
                onClick={() => signIn(PlatformName)}
            >
                Sign in with {GetPlatformNameCamelCase(PlatformName)}
            </button>
        </div>
    )
}



export default function SignIn({ }: {}) {
    const { data: session, status } = useSession();

    return (
        <div className={`text-center w-full mx-auto max-w[1240px] mt-16`}>
            <GithubLoginButton onClick={() => signIn("github")} className={`mx-auto mt-16`} />
            <DiscordLoginButton onClick={() => signIn("discord")} className={`mx-auto mt-16`} />
            <GoogleLoginButton onClick={() => signIn("google")} className={`mx-auto mt-16`} />
        </div>
    )
}