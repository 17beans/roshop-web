import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { gothicA1 } from "./Fonts";
import SignInSignOut from "./SignInSignOutButton";


const Left = () => {
  return (
    <div className={`flex w-full justify-start`}>
      <div className="grid grid-cols-3 items-center text-center
      w-full
      md:w-11/12">
        <Link href={'/'} className="flex justify-center">
          <Image
            className=""
            src="/Logo_RoShop.png"
            // 오리지널 사이즈 / 2
            width={174 / 2}
            height={51 / 2}
            alt="RoShop Web Logo"
          />
        </Link>

        <Link href={'/list/Products'} className="">
          판매
        </Link>

        <Link href={'/list/Orders'} className="">
          주문제작
        </Link>
      </div>
    </div>
  )
}

const Right = () => {
  return (
    <div className={`flex w-full justify-end`}>
      <div className="grid grid-cols-3 items-center text-center w-full
      md:w-11/12">
        <Link href={'https://www.roblox.com/groups/8115201/RoShop#!/about'} className="">
          로블록스
        </Link>

        <Link href={'https://discord.gg/WKHScdFW4X'} className="">
          디스코드
        </Link>

        {/* 로그인/로그아웃 */}
        {/* <div className=""><SignInSignOut /></div> */}
        <SignInSignOut />
      </div>
    </div>
  )
}

export default function TopBar() {
  return (
    <div className={`flex w-full px h-10 justify-center ${gothicA1.className} font-bold bg-white text-black`}>
      <div className="flex md:w-8/12">
        <div className="flex w-full justify-between">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  )
}