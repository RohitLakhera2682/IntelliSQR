import { Request, Response } from "express";
import prisma from "../prisma";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = authSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    
    await prisma.user.create({ data: { email, password } });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = authSchema.parse(req.body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    if (password != user.password) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful", user: { email: user.email } });
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
};
