import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";

const createUser = async (payload: any) => {
  const { email, role } = payload;

  const user = await prisma.users.create({ data: payload });

  const accessToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user,
  };
};
const loginUser = async (payload: any) => {
  const { email, password } = payload;

  const isUserExist = await prisma.users.findUnique({ where: { email } });
  console.log(isUserExist);

  if (!isUserExist) {
    throw new Error("user does not exist");
  }

  if (isUserExist.password !== password) {
    throw new Error("Password not matched");
  }

  const { role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  loginUser,
  createUser,
};
