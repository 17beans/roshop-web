import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import { Margin, MarginLarge } from "./Margin";
import Card_Orders from "./Card_Orders";
import { TypeOrder } from "./ComponentsSettings";
const mock = require('/public/cardDatas.json');



const ComponentName = () => {
    return (
        <div>

        </div>
    )
}



export default function RoShopPick({ }: {}) {
    return (
        <div className="flex-col">
            <div className="flex justify-center">
                <div className="flex text-center">지금 주목해야 할
                    &nbsp;
                    <div className="font-bold">#로샵픽</div>
                </div>
            </div>

            <Margin />
            <Margin />

            <div className="flex">
                <div className="basis-1/6 flex"></div>
                <div className="basis-4/6 flex">
                    {mock.Orders.map((cardData: TypeOrder) => {
                        return (<Card_Orders cardData={cardData} key={cardData.PID}></Card_Orders>)
                    })}
                </div>
                <div className="basis-1/6 flex"></div>
            </div>

        </div>
    )
}