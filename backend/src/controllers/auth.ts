import { createHmac, randomBytes } from "crypto";
import prismaClient from "../lib/db.js";
import { Request, Response } from "express";
import { generateToken, UserPayload } from "../services/auth.js";

function generateHash(salt: string, password: string): string {
  const hashedPassword: string = createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  return hashedPassword;
}

async function createUserHandler(req: Request, res: Response): Promise<any> {
  const { username, email, password } = req.body;

  try {
    /* Checking for existing user */
    const existingUser = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(409).json({ msg: "Email already in use" });
    }

    const salt = randomBytes(16).toString("hex");
    const hashedPassword = generateHash(salt, password);

    /* Creating a user */
    await prismaClient.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        salt,
      },
    });

    return res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function loginUserHandler(req: Request, res: Response): Promise<any> {
  const { email, password } = req.body;

  try {
    /* Checking for user */
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).json({ msg: "No User found" });
    }

    const salt = user.salt;

    const userEnteredHashedPassword = generateHash(salt, password);

    if (userEnteredHashedPassword != user.password) {
      return res.status(401).json({ msg: "Invalid Password" });
    }

    /* JWT Authentication */
    const payload: UserPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token: string = generateToken(payload);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

export { createUserHandler, loginUserHandler };
