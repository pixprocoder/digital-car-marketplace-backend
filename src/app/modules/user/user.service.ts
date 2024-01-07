import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

const createUser = async (payload: any) => {
  console.log(payload);
  const result = await prisma.user.create(payload);

  return result;
};

export const userService = {
  createUser,
};
