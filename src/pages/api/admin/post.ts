import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts, createPost, updatePost } from "@/mutations/admin/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getPosts(req, res);
  } else if (req.method === "POST") {
    return createPost(req, res);
  } else if (req.method === "PUT") {
    return updatePost(req, res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
