"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { signIn } from "next-auth/react";
import { DiscordLoginButton, GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { FaGithub, FaDiscord, FaGoogle } from 'react-icons/fa'
import { SvgIcon } from "@mui/material";



const GetPlatformNameCamelCase = (PlatformName: string) => {
  if (PlatformName == 'github') return 'GitHub';
  if (PlatformName == 'discord') return 'Discord';
  if (PlatformName == 'google') return 'Google';
  if (PlatformName == 'naver') return 'Naver';
  if (PlatformName == 'kakao') return 'Kakao';
}

const SignInButton = ({ PlatformName }: { PlatformName: 'github' | 'discord' | 'google' | 'naver' | 'kakao' }) => {
  const bgColor = PlatformName == 'github' && 'bg-github' || PlatformName == 'discord' && 'bg-discord' || PlatformName == 'google' && 'bg-google' || PlatformName == 'naver' && 'bg-naver' || PlatformName == 'kakao' && 'bg-kakao';
  const textColor = PlatformName == 'github' && 'text-github' || PlatformName == 'discord' && 'text-discord' || PlatformName == 'google' && 'text-google' || PlatformName == 'naver' && 'text-naver' || PlatformName == 'kakao' && 'text-kakao';
  const icon = PlatformName == 'github' && FaGithub || PlatformName == 'discord' && FaDiscord || PlatformName == FaGoogle && 'text-google' || PlatformName == 'naver' && (() => { return (<></>) }) || PlatformName == 'kakao' && (() => { return (<></>) })

  return (
    <button
      className={`flex mt-4 ${bgColor} ${textColor} px-6 py-3 rounded-lg`}
      onClick={() => signIn(PlatformName)}
    >
      <SvgIcon xmlns="github.svg" />
      Sign in with {GetPlatformNameCamelCase(PlatformName)}
    </button>
  )
}



export default function SignIn({ }: {}) {
  return (
    <div className={`flex-col`}>
      {/* <GithubLoginButton onClick={() => signIn("github")} className={`mx-auto mt-16`} />
            <DiscordLoginButton onClick={() => signIn("discord")} className={`mx-auto mt-16`} />
            <GoogleLoginButton onClick={() => signIn("google")} className={`mx-auto mt-16`} /> */}

      <SignInButton PlatformName="github" />
      <SignInButton PlatformName="discord" />
      <SignInButton PlatformName="google" />
      <SignInButton PlatformName="naver" />
      <SignInButton PlatformName="kakao" />
    </div>
  )
}