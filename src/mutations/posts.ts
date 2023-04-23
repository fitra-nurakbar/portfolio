import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: body.authorId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({ newPost, status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, status: false });
  }
}

async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany();

    return res.status(200).json({ posts, status: true });
  } catch (error) {
    return res.status(500).json({ error, status: false });
  }
}

async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const postId = parseInt(req.query.id as string);

  try {
    const upPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({ upPost, status: true });
  } catch (error) {
    return res.status(500).json({ error, status: false });
  }
}

export { getPosts, createPost, updatePost };
