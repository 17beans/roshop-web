import Image from "next/image";
import Link from "next/link";
import { Settings, TypeSellingProducts } from "./ComponentsSettings";



const ComponentName = () => {
    return (
        <div>

        </div>
    )
}



export default function Cards_Products({ cardData }: { cardData: TypeSellingProducts }) {
    return (
        <div className="flex">
            <Image
                src={cardData.ImageUrl}
                width={Settings.CardWidth}
                height={Settings.CardHeight}
                alt="Product thumbnail"
            ></Image>
            <div>{cardData.ProductName}</div>
            <div>{cardData.Price}</div>
        </div>
    )
}