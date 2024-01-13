import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { Margin, MarginLarge } from "./Margin";
import { TypeProduct } from "./ComponentsSettings";
import { gothicA1 } from "./Fonts";
import Card_Products from "./Card_Products";



const ComponentName = () => {
  return (
    <div>

    </div>
  )
}



export default function CardList_Products({ title, max, data }: { title: string, max: number, data: TypeProduct[] }) {
  const title_normal = title.split("#", 2)[0]
  const title_bold = title.split("#", 2)[1]

  return (
    <div className="flex-col">
      {
        !title ?
          <div></div> :
          <div>
            <div className="flex justify-center font-S-CoreDream text-black">
              <div className="flex text-center">{title_normal}
                &nbsp;
                <div className="font-bold">#{title_bold}</div>
              </div>
            </div>

            <Margin />
            <Margin />
          </div>
      }

      <div className={`flex w-full justify-center`}>
        <div className={`grid place-items-center align-baseline ${gothicA1.className} text-black overflow-hidden w-full
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3 xl:w-10/12
        2xl:grid-cols-3 2xl:w-10/12`}>
          {data.map((cardData: TypeProduct, index) => {
            // 최대 카드 갯수에 해당하는 index일 경우 return하여 최대 카드 갯수 이하로 보이도록!
            if (index > max - 1) return
            return (<Card_Products cardData={cardData} key={cardData.PID}></Card_Products>)
          })}
        </div>
      </div>
    </div>
  )
}