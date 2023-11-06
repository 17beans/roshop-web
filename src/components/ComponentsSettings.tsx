export const Settings = {
    CardWidth: 100,
    CardHeight: 100,
}

export type TypeSellingProducts = {
    PID: 0,
    ProductName: string,
    SellerName: string,
    Price: number,
    CurrencyType: string,
    ImageUrl: string,
    Activated: number,
    Detail: {
        DetailPageData1: any,
        DetailPageData2: any
    }
}
export type TypeOrders = {
    PID: 0,
    OrderName: string,
    Orderer: string,
    Price: 30000,
    CurrencyType: string,
    ImageUrl: string,
    Activated: number,
    Detail: {
        DetailPageData1: any,
        DetailPageData2: any
    },
    Completed: number
}