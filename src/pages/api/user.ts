import type { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUsers } from "@/mutations/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getUsers(req, res);
  } else if (req.method === "POST") {
    return createUser(req, res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
