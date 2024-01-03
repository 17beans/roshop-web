import Image from "next/image";
import Link from "next/link";
import { Settings, TypeOrder } from "./ComponentsSettings";



export default function Card_Orders({ cardData }: { cardData: TypeOrder }) {
  return (
    <div className="border rounded-2xl m-2 basis-1/3">
      <Image
        src={cardData.ImageUrl}
        width={Settings.CardWidth}
        height={Settings.CardHeight}
        alt={`Order thumbnail: ${cardData.OrderName}`}
        unoptimized={true}
        className="border rounded-2xl w-[100%]"
      ></Image>
      <div className="">{cardData.OrderName}</div>
      <div className="flex">
        <div>{cardData.CurrencyType}</div>
        <div>&nbsp;</div>
        <div>{cardData.Price}</div>
      </div>
    </div>
  )
}