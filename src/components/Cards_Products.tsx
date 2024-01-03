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



export default function Cards_Products({ title, max, data }: { title: string, max: number, data: TypeProduct[] }) {
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

      <div className={`flex ${gothicA1.className} text-black`}>
        <div className="basis-2/6 flex"></div>
        <div className="basis-4/6 grid grid-cols-3">
          {data.map((cardData: TypeProduct, index) => {
            if (index > max - 1) return
            return (<Card_Products cardData={cardData} key={cardData.PID}></Card_Products>)
          })}
        </div>
        <div className="basis-2/6 flex"></div>
      </div>

    </div>
  )
}