import { Margin, MarginLarge } from "@/components/Margin";
import mock from "@/app/cardDatas"
import CardList_Products from "@/components/CardList_Products";
import CardList_Orders from "@/components/CardList_Orders";



export default function Home() {
  return (
    <div className={`flex justify-center`}>
      <div className={`flex flex-col`}>
      <MarginLarge />
      <Margin />
      <CardList_Products title={`지금 주목해야 할 #로샵픽`} max={6} data={mock.Products} />
      <MarginLarge />
      <Margin />
      <CardList_Orders title={`최근에 올라온 #주문제작`} max={6} data={mock.Orders} />

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
    </div>
  )
}
