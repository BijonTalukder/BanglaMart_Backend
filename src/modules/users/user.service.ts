import { User } from "./user.model";

const createUser = async (payload:any) => {
  console.log(payload);
  
  const createUser = await User.create(payload);
  console.log(createUser);
  // if (!createUser) {
  // }
  return createUser;
};
export default {
  createUser,
};
