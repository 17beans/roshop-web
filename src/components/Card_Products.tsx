import Image from "next/image";
import Link from "next/link";
import { Settings, TypeProduct } from "./ComponentsSettings";



export default function Card_Products({ cardData }: { cardData: TypeProduct }) {
  return (
    // <div className="border rounded-2xl m-2 flex flex-wrap flex-row flex-shrink-1 basis-1/3 h-40">
    <div className="border rounded-2xl m-2 flex flex-wrap flex-row flex-1 flex-shrink-0 basis-0 h-40">
      <Image
        src={cardData.ImageUrl}
        width={Settings.CardWidth}
        height={Settings.CardHeight}
        alt={`Product thumbnail: ${cardData.ProductName}`}
        unoptimized={true}
        className="flex flex-1 flex-shrink-0 basis-0 border rounded-2xl w-auto h-auto"
      ></Image>
      <div className={`flex flex-1 flex-shrink-0 basis-0 font-semibold`}>{cardData.ProductName}</div>
      <div className={`flex flex-1 flex-shrink-0 basis-0`}>
        <div>{cardData.CurrencyType}</div>
        <div>&nbsp;</div>
        <div>{cardData.Price}</div>
      </div>
    </div>
  )
}