import Image from "next/image";
import Link from "next/link";
import { Settings, TypeSellingProduct } from "./ComponentsSettings";



export default function Card_Products({ cardData }: { cardData: TypeSellingProduct }) {
    return (
        <div className="flex" key={cardData.PID}>
            <Image
                src={cardData.ImageUrl}
                width={Settings.CardWidth}
                height={Settings.CardHeight}
                alt={`Product thumbnail: ${cardData.ProductName}`}
                unoptimized={true}
            ></Image>
            <div>{cardData.ProductName}</div>
            <div className="flex">
                <div className="font-bold">{cardData.CurrencyType}</div>
                <div>&nbsp;</div>
                <div>{cardData.Price}</div>
            </div>
        </div>
    )
}