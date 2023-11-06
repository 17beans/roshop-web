import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';



const ComponentName = () => {
    return (
        <div>

        </div>
    )
}

const UnderLine = () => {
    return (
        <div style={{ width: '100%', height: '1px', borderColor: 'black' }} className="bg-gray-300">

        </div>
    )
}

const Margin = () => {
    return (
        <div className="p-2 bg-white">

        </div>
    )
}

const MarginLarge = () => {
    return (
        <div className="p-10 bg-white">

        </div>
    )
}



export default function Footer({ }: {}) {
    return (
        <div className="flex-row text-gray-600 font-S-CoreDream bg-white">
            <MarginLarge />
            <UnderLine />
            <MarginLarge />

            <div className="flex">
                <div className="flex-1"></div>
                <div style={{ width: '67.5%' }}>
                    <Stack className="font-bold" direction={'row'} spacing={2}>
                        <Link href={'/'}>개인정보처리방침</Link>
                        <Link href={'/'}>이용약관</Link>
                        <Link href={'/'}>청소년보호정책</Link>
                        <Link href={'/'}>문의접수</Link>
                        <Link href={'/'}>회사소개</Link>
                        <Link href={'https://discord.gg/WKHScdFW4X'}>디스코드</Link>
                    </Stack>
                    <Margin />

                    <Stack direction={'row'} spacing={2}>
                        <div>로샵</div>
                        <div>640-59-00693</div>
                        <div>사업자정보확인</div>
                        <div>2023-서울노원-1789</div>
                    </Stack>
                    <Margin />

                    서울특별시 노원구 통일로 192다길 35, 이화빌라 B02호
                    <Margin />
                    <Stack direction={'row'} spacing={2}>
                        <div>개인정보처리책임자 : 최지원</div>
                        <div>이메일 : support@roshop.kr</div>
                    </Stack>
                    <Margin />
                    호스팅사업자 : 아마존웹서비스(AWS)
                    <Margin />
                    Copyrights 로샵 All Rights Reserved.
                    <Margin />
                    로샵은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서, 로샵은 상품 및 주문제작의 거래정보 및 거래에 대하여 책임지지 않습니다.<br />
                    다만, 로샵이 직접 판매하는 상품의 책임은 당사에게 있습니다.
                </div>
                <div className="flex-1"></div>
            </div>

            <MarginLarge />
        </div>
    )
}