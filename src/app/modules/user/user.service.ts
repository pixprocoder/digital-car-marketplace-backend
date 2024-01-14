import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

const createUser = async (payload: any) => {
  const result = await prisma.user.create(payload);

  return result;
};

const getAllUser = async () => {
  const result = await prisma.user.findMany({});

  return result;
};

export const userService = {
  createUser,
  getAllUser,
};
