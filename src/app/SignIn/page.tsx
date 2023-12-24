"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { signIn, useSession } from "next-auth/react";



const GetPlatformNameCamelCase = (PlatformName: string) => {
    if (PlatformName == 'github') return 'GitHub';
    if (PlatformName == 'discord') return 'Discord';
    if (PlatformName == 'google') return 'Google';
    if (PlatformName == 'naver') return 'Naver';
    if (PlatformName == 'kakao') return 'Kakao';
}

const SignInButton = ({ PlatformName }: { PlatformName: string }) => {
    return (
        <div>
            <button
                className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg"
                onClick={() => signIn(PlatformName)}
                >
                Sign in with {GetPlatformNameCamelCase(PlatformName)}
            </button>
        </div>
    )
}



export default function SignIn({ }: {}) {
    const {data: session, status} = useSession();
    
    return (
        <div>
            <SignInButton PlatformName="github" />
            <SignInButton PlatformName="discord" />
            <SignInButton PlatformName="google" />
            <SignInButton PlatformName="naver" />
            <SignInButton PlatformName="kakao" />
        </div>
    )
}