import { IRating } from "./rating.interface";
import { rating } from "./rating.model";


const createRating = async (payload: Partial<IRating>) => {
  const result = await rating.create(payload);
  return result;
};
const getRating = async () => {
  const result = await rating.find({});
  return result;
};

const getSingleRating = async (id: number) => {
  const result = await rating.findOne({ id: id });
  return result;
};

export const productTypeService = {
 createRating,
 getRating,
 getSingleRating
}
