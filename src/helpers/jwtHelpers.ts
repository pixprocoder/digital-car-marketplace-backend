import jwt, { Secret } from "jsonwebtoken";

// type ICreateToken = {
// payload: Record<string, unknown>
// secret: Secret
// expireTime: string
// }

const createToken = (payload, secret, expireTime): string => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

export const jwtHelpers = {
  createToken,
};
