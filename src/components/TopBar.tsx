import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';


const Left = () => {
    return (
        <Stack spacing={8} direction="row" className="flex-1 justify-center items-center mt-6 mb-6">
            <Link href={'/'}>
                <Image
                    src="/Logo_RoShop.png"
                    width={174 / 2}
                    height={51 / 2}
                    alt="RoShop Web Logo"
                />
            </Link>
            <Link href={'/list/Products'}>
                판매
            </Link>
            <Link href={'/list/Orders'}>
                주문제작
            </Link>
        </Stack>
    )
}

const Right = () => {
    return (
        <Stack spacing={4} direction="row" className="flex-1 justify-center items-center">
            <Link href={'/'}>
                로블록스
            </Link>
            <Link href={'/https://discord.gg/WKHScdFW4X'}>
                디스코드
            </Link>
            {/* <Link href={'/'} className="bg-login-blue rounded-xl pt-1.5 pb-1.5 pl-3.5 pr-3.5 text-white">
                로그인하기
            </Link> */}
            <div className="bg-login-blue rounded-xl pt-1.5 pb-1.5 pl-3.5 pr-3.5 text-white">
                로그인하기
            </div>
        </Stack>
    )
}

export default function TopBar() {
    return (
        <div className="flex font-S-CoreDream text-xl font-bold bg-white text-black">
            <Left />
            <div className="flex-6 justify-center"></div>
            <Right />
        </div>
    )
}