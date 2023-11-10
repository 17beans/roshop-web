import RoShopPick from "@/components/RoShopPick";
import { Margin, MarginLarge } from "@/components/Margin";



export default function Home() {
  return (
    <div>
      <RoShopPick />
      <MarginLarge />
      <Margin />
      <RoShopPick />

      {/* <div className="flex">
        <div className="basis-1/6"></div>
        <div className="basis-4/6">
          {mock.Orders.map((cardData: TypeOrder) => {
            return (<Card_Orders cardData={cardData} key={cardData.PID}></Card_Orders>)
          })}
        </div>
        <div className="basis-1/6"></div>
      </div> */}
    </div>
  )
}
