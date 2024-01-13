import Image from "next/image";
import Link from "next/link";
import { Settings, TypeOrder } from "./ComponentsSettings";



const ComponentName = () => {
  return (
    <div>

    </div>
  )
}



export default function Card_Orders({ cardData }: { cardData: TypeOrder }) {
  return (
    <div className={`border rounded-lg flex flex-col shadow-md my-4 overflow-hidden bg-white
    sm:w-11/12 max-sm:w-11/12
    md:w-11/12 max-md:w-52
    lg:w-11/12 max-lg:w-52
    xl:w-11/12 max-xl:w-auto
    2xl:w-11/12 max-2xl:w-auto`}>
      <Image
        src={cardData.ImageUrl}
        width={Settings.CardWidth}
        height={Settings.CardHeight}
        alt={`Order thumbnail: ${cardData.OrderName}`}
        unoptimized={true}
        className="w-full"
      ></Image>

      <div className="border-t"></div>

      <div className="px-1 py-1 pb-2">
        <div className={`font-semibold`}>{cardData.OrderName}</div>
        <div>{cardData.Price} {cardData.CurrencyType}</div>
      </div>
    </div>
  )
}