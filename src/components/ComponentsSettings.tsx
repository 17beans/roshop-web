export const Settings = {
    CardWidth: 256,
    CardHeight: 149,
}

export type TypeProduct = {
    PID: number,
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
export type TypeOrder = {
    PID: number,
    OrderName: string,
    Orderer: string,
    Price: number,
    CurrencyType: string,
    ImageUrl: string,
    Activated: number,
    Detail: {
        DetailPageData1: any,
        DetailPageData2: any
    },
    Completed: number
}