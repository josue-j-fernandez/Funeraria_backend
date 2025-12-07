//src/controllers/authController.ts
import { Request, Response } from "express";
import { UserService } from "../services/userServicio";

export const AuthController = {
  async login(req: Request, res: Response) {
    const { usuario, contrasena } = req.body;

    try {
      const { token, user } = await UserService.login(usuario, contrasena);
      return res.json({ token, user });
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  },
};
