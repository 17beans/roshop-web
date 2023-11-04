import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

enum ButtonType {
    General,
    BlueBox
}

export default function TopBar() {
    return (
        <div className="flex">
            <h3 className="text-red-50">테스트</h3>
            <Stack spacing={2} direction="row" className="justify-center items-center text-center self-center">
                <Link href={'/'}>
                    <Image
                        src="/Logo_RoShop.png"
                        width={174}
                        height={51}
                        alt="RoShop Web Logo"
                    />
                </Link>

                

                <Link href={'/'} className="justify-center items-center text-center self-center" style={{ textDecoration: 'none' }}>
                    판매
                </Link>
                <Link href={'/'} style={{textDecoration: 'none'}} >
                    <h3 className="text-center self-center text-red-50">주문제작</h3>
                </Link>
                <Link href={'/'}>
                    문의
                </Link>
                <Link href={'/'}>
                    로블록스
                </Link>
                <Link href={'/'}>
                    디스코드
                </Link>
                <Link href={'/'}>
                    로그인하기
                </Link>
            </Stack>
        </div>
    )
}