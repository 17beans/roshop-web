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
      className={`flex mt-4 ${props.bgColor} ${props.textColor} pl-6 pr-10 rounded-lg items-center border w-1/5 h-14 justify-between text-base`}
      onClick={() => signIn(PlatformName)}
    >
      <props.Icon className={`h-14`} />
      {/* Continue with {GetPlatformNameCamelCase(PlatformName)} */}
      {GetPlatformNameCamelCase(PlatformName)}로 계속하기
    </button>
  )
}



export default function SignIn({ }: {}) {
  return (
    <div className="mt-16 flex flex-1 flex-col justify-center items-center">
      <div className="text-lg font-bold">회원가입 및 로그인</div>
      <div className="flex flex-col w-11/12 justify-center items-center">
        <SignInButton PlatformName="github" />
        <SignInButton PlatformName="discord" />
        <SignInButton PlatformName="google" />
        <SignInButton PlatformName="naver" />
        <SignInButton PlatformName="kakao" />
      </div>
    </div>
  )
}