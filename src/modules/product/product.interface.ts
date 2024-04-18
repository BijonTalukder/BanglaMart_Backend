export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  weight: number;
  description: string;
  reviewId?: number;
  productTypeId: number;
  userId: number;
  imageUrl: string;
}
