import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
    });

    return res.status(200).json({ posts, status: true });
  } catch (error) {
    return res.status(500).json({ error, status: false });
  }
}

export { getPosts };
