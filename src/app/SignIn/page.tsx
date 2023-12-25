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
        <div>
            {/* <SignInButton PlatformName="github" buttonColor={`bg-slate-800 `} />
            <SignInButton PlatformName="discord" buttonColor={`bg-violet-600`} />
            <SignInButton PlatformName="google" buttonColor={`bg-white-700`} textColor={``} />
            <SignInButton PlatformName="naver" buttonColor={`bg-green-500`} />
            <SignInButton PlatformName="kakao" buttonColor={``} /> */}

            {/* <button
                className={`x-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150`}
                onClick={() => signIn('google')}
            >
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
            </button> */}

            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span className="text-black">Login with Google</span>
            </button>
        </div>
    )
}