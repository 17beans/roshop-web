"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { useSession } from "next-auth/react";



const ComponentName = () => {
    return (
        <div>

        </div>
    )
}



export default function SignInSignOut() {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <div className="flex">
                <Link
                    href={'/SignOut'}
                    className={`bg-login-blue rounded-xl pt-1.5 pb-1.5 pl-3.5 pr-3.5 text-white`}>
                    로그아웃
                </Link>
                {/* <div className="bg-login-blue rounded-xl pt-2 pb-1.5 pl-3.5 pr-3.5 text-white">
                로그인하기
                </div> */}
            </div>
        )
    }
    else {
        return (
            <div className="flex">
                <Link
                    href={'/SignIn'}
                    className="bg-login-blue rounded-xl pt-1.5 pb-1.5 pl-3.5 pr-3.5 text-white">
                    로그인
                </Link>
                {/* <div className="bg-login-blue rounded-xl pt-2 pb-1.5 pl-3.5 pr-3.5 text-white">
                로그인하기
                </div> */}
            </div>
        )
    }
}