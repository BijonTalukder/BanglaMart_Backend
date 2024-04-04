import { user } from "./user.model";

const createUser = async (payload:any) => {
  const createUser = await user.create(payload);
  if (!createUser) {
  }
  return createUser;
};
export default {
  createUser,
};
