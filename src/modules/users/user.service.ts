import { user } from "./user.model";

const createUser = async (payload) => {
  const createUser = await user.create(payload);
  if (!createUser) {
  }
  return createUser;
};
export default {
  createUser,
};
