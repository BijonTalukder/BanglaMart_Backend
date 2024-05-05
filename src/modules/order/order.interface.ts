export interface IOrder {
    id: number;
    userId: number;
    orderTotal: number;
    productId: number[];
    sellerId: number[];
    orderStatus: string;

  }
  