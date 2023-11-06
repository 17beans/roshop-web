import Image from "next/image";
import Link from "next/link";
import { Settings, TypeOrders } from "./ComponentsSettings";



const ComponentName = () => {
    return (
        <div>

        </div>
    )
}



export default function Cards_Orders({ cardData }: { cardData: TypeOrders }) {
    return (
        <div className="flex">
            <Image
                src={cardData.ImageUrl}
                width={Settings.CardWidth}
                height={Settings.CardHeight}
                alt="Order thumbnail"
            ></Image>
            <div>{cardData.OrderName}</div>
            <div>{cardData.Price} {cardData.CurrencyType}</div>
        </div>
    )
}