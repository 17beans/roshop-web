import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { Margin, MarginLarge } from "./Margin";
import { gothicA1 } from "./Fonts";



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



export default function Footer({ }: {}) {
  return (
    // <div className={`flex-row text-gray-600 font-S-CoreDream bg-white`}>
    <div className={`flex-row text-gray-600 ${gothicA1.className} bg-white`}>
      <MarginLarge />
      <UnderLine />
      <MarginLarge />

      <div className="flex">
        <div className="flex-1"></div>
        <div style={{ width: '67.5%' }}>
          <Stack className="font-bold text-black text-lg" direction={'row'}>
            <div>로샵</div>
          </Stack>

          <Stack className="font-bold" direction={'row'}>
            <div>대표: 최지원</div>
          </Stack>

          <Stack direction={'row'} spacing={2}>
            <div>사업자 등록 번호: 640-59-00693</div>
            <div>통신판매신고: 2023-서울노원-1789</div>
            <Link href={'https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6405900693'}>[사업자정보확인]</Link>
          </Stack>

          <div>서울특별시 노원구 통일로 192다길 35, 이화빌라 B02호</div>
          <Stack direction={'row'} spacing={2}>
            <div>개인정보처리책임자 : 최지원</div>
            <div>이메일 : support@roshop.kr</div>
          </Stack>

          <Stack className="" direction={'row'} spacing={2}>
            <Link href={'/'} className="text-blue-500">개인정보처리방침</Link>
            <div>|</div>
            <Link href={'/'} className="text-blue-500">이용약관</Link>
            <div>|</div>
            <Link href={'/'} className="text-blue-500">청소년보호정책</Link>
            <div>|</div>
            <Link href={'/'} className="text-blue-500">문의접수</Link>
            <div>|</div>
            <Link href={'/'} className="text-blue-500">회사소개</Link>
            <div>|</div>
            <Link href={'https://discord.gg/WKHScdFW4X'} className="text-blue-500">디스코드</Link>
            <div>|</div>
            <Link href={'https://pf.kakao.com/_xlxiyxbG'} className="text-blue-500">카카오톡</Link>
          </Stack>

          {/* <div>호스팅사업자 : 아마존웹서비스(AWS)</div> */}
          <Margin />

          <div>
            로샵은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서, 로샵은 상품 및 주문제작의 거래정보 및 거래에 대하여 책임지지 않습니다.
            <br />
            다만, 로샵이 직접 판매하는 상품의 책임은 당사에게 있습니다.
          </div>
          <Margin />
          <div className="font-bold">Copyrights 로샵 All Rights Reserved.</div>
        </div>
        <div className="flex-1"></div>
      </div>

      <MarginLarge />
    </div>
  )
}