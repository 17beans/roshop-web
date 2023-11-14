import { Margin, MarginLarge } from "@/components/Margin";
import mock from "../app/cardDatas"
import Cards_Products from "@/components/Cards_Products";
import Cards_Orders from "@/components/Cards_Orders";



export default function Home() {
  return (
    <div>
      <MarginLarge />
      <Margin />
      <Cards_Products title={`지금 주목해야 할 #로샵픽`} max={6} data={mock.Products} />
      <MarginLarge />
      <Margin />
      <Cards_Orders title={`최근에 올라온 #주문제작`} max={6} data={mock.Orders} />

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
