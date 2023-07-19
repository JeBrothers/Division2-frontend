import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nickname, password } = req.body;

  if (!nickname || !password) {
    return res
      .status(400)
      .json({ error: "닉네임과 비밀번호를 모두 입력해주세요." });
  }

  await prisma.user.create({
    data: {
      nickname,
      password,
    },
  });
}
