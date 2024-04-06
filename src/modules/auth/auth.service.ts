import { user } from "../users/user.model";

const loginUser = async (payload) => {
  const { email, password } = payload;
  const isUserExist = await user.findOne({ email: email });
  if (!isUserExist) {
    console.log("User not found");
  }
};

export const AuthService = {
  loginUser,
};
