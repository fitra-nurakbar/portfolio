import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return res.status(200).json({ newUser, status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, status: false });
  }
}

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({ users, status: true });
  } catch (error) {
    return res.status(500).json({ error, status: false });
  }
}

export { createUser, getUsers };
