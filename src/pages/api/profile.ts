import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });
  try {
    const profiles = await prisma.profile.findMany();

    return res.status(200).json({ profiles, status: true });
  } catch (error) {
    return res.status(500).json({ error, status: false });
  }
}
