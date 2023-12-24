import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { gothicA1 } from "./Fonts";
import SignInSignOut from "./SignInSignOutButton";


const Left = () => {
    return (
        <Stack spacing={8} direction="row" className="flex-1 justify-center items-center mt-6 mb-6">
            <Link href={'/'} className="">
                <Image
                    src="/Logo_RoShop.png"
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
        </Stack>
    )
}

const Right = () => {
    return (
        <Stack spacing={4} direction="row" className="flex-1 justify-center items-center">
            <Link href={'https://www.roblox.com/groups/8115201/RoShop#!/about'} className="">
                로블록스
            </Link>
            <Link href={'https://discord.gg/WKHScdFW4X'} className="">
                디스코드
            </Link>

            <SignInSignOut />

        </Stack>
    )
}

export default function TopBar() {
    return (
        // <div className="flex font-S-CoreDream font-bold bg-white text-black">
        <div className={`flex ${gothicA1.className} font-bold bg-white text-black`}>
            <Left />
            <div className="flex-6 justify-center"></div>
            <Right />
        </div>
    )
}