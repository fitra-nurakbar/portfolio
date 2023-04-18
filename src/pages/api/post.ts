import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(500).json({ message: "Method Not Allowed" });
  try {

  } catch (error) {
    
  }
}
