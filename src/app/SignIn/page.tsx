"use client"

import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { signIn } from "next-auth/react";
import IconGitHub from '@/../public/github.svg';
import IconDiscord from '@/../public/discord.svg';
import IconGoogle from '@/../public/google.svg';
import IconNaver from '@/../public/naver.svg';
import IconKakao from '@/../public/kakao.svg';
import { Margin } from "@/components/Margin";



const GetPlatformNameCamelCase = (PlatformName: string) => {
  // if (PlatformName == 'github') return 'GitHub';
  // if (PlatformName == 'discord') return 'Discord';
  // if (PlatformName == 'google') return 'Google';
  // if (PlatformName == 'naver') return 'Naver';
  // if (PlatformName == 'kakao') return 'Kakao';
  if (PlatformName == 'github') return 'GitHub으';
  if (PlatformName == 'discord') return 'Discord';
  if (PlatformName == 'google') return 'Google';
  if (PlatformName == 'naver') return '네이버';
  if (PlatformName == 'kakao') return '카카오';
}

const GetProps = (PlatformName: string) => {
  return (
    PlatformName == 'github' && {
      bgColor: 'bg-github',
      textColor: 'text-github',
      Icon: IconGitHub
    }
    || PlatformName == 'discord' && {
      bgColor: 'bg-discord',
      textColor: 'text-discord',
      Icon: IconDiscord
    }
    || PlatformName == 'google' && {
      bgColor: 'bg-google',
      textColor: 'text-google',
      Icon: IconGoogle
    }
    || PlatformName == 'naver' && {
      bgColor: 'bg-naver',
      textColor: 'text-naver',
      Icon: IconNaver
    }
    || PlatformName == 'kakao' && {
      bgColor: 'bg-kakao',
      textColor: 'text-kakao',
      Icon: IconKakao
    }
    || {
      bgColor: "",
      textColor: "",
      Icon: "",
    }
  )
}

const SignInButton = ({ PlatformName }: { PlatformName: 'github' | 'discord' | 'google' | 'naver' | 'kakao' }) => {

  const props: { bgColor: string, textColor: string, Icon: any } = GetProps(PlatformName);

  return (
    <button
      className={`flex pr-4 my-1.5 ${props.bgColor} ${props.textColor} rounded-lg items-center border justify-center text-base`}
      onClick={() => signIn(PlatformName)}
    >
      <props.Icon className="flex h-full max-h-14" />

      <div className="">
        {/* Continue with {GetPlatformNameCamelCase(PlatformName)} */}
        {GetPlatformNameCamelCase(PlatformName)}로 계속하기
      </div>
    </button>
  )
}



export default function SignIn({ }: {}) {
  return (
    <div className="mt-16 flex flex-1 flex-col items-center">
      <div className="text-lg font-bold">회원가입 및 로그인</div>
      <Margin />
      <div className="flex flex-col
      w-7/12
      sm:w-6/12
      md:w-7/12
      lg:w-5/12
      xl:w-4/12
      2xl:w-4/12">
        <SignInButton PlatformName="github" />
        <SignInButton PlatformName="discord" />
        <SignInButton PlatformName="google" />
        <SignInButton PlatformName="naver" />
        <SignInButton PlatformName="kakao" />
      </div>
    </div>
  )
}