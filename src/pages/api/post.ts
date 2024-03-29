import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@/mutations/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getPosts(req, res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
