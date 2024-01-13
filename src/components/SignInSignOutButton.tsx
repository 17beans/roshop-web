"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { signIn, signOut, useSession } from "next-auth/react";



const ComponentName = () => {
  return (
    <div>

    </div>
  )
}



export default function SignInSignOut() {
  const { data: session, status } = useSession();

  return (
    <Link
      href={status === "authenticated" && "/" || "/SignIn"}
      onClick={() => status === "authenticated" && signOut() || (() => { })}
      className="bg-login-blue rounded-xl text-white h-3/4 w-16 center flex justify-center justify-self-center items-center">
      {status === "authenticated" && "로그아웃" || "로그인"}
    </Link>
  )

  if (status === "authenticated") {
    return (
      <Link
        href={'/'}
        onClick={() => status === "authenticated" && signOut() || signIn()}
        className={`bg-login-blue rounded-xl text-white h-3/4 w-16 center flex justify-center justify-self-center items-center`}>
        {status === "authenticated" && "로그아웃" || "로그인"}
      </Link>
    )
  }
  else {
    return (
      <Link
        href={'/SignIn'}
        className="bg-login-blue rounded-xl text-white h-3/4 w-16 center flex justify-center justify-self-center items-center">
        로그인
      </Link>
    )
  }
}