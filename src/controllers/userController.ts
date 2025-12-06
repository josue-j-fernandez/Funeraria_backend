import { Request, Response } from "express";
import { UserService } from "../services/userServicio";

export const UserController = {
  async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      return res.json(users);
    } catch (error: any) {
      console.error("Error al obtener usuarios:", error);
      return res.status(500).json({ error: "Error al obtener usuarios" });
    }
  },

  async create(req: Request, res: Response) {
    const { nombre, apellidoPaterno, apellidoMaterno, cedula, usuario, contrasena } = req.body;

    try {
      const newUser = await UserService.create({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        cedula,
        usuario,
        contrasena,
      });

      return res.json(newUser);
    } catch (error: any) {
      console.error("Error al crear usuario:", error);
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { nombre, apellidoPaterno, apellidoMaterno, cedula, usuario, contrasena } = req.body;

    try {
      const updatedUser = await UserService.update(id, {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        cedula,
        usuario,
        contrasena,
      });

      return res.json(updatedUser);
    } catch (error: any) {
      console.error("Error al actualizar usuario:", error);
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      await UserService.delete(id);
      return res.json({ message: "Usuario eliminado" });
    } catch (error: any) {
      console.error("Error al eliminar usuario:", error);
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      const user = await UserService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      return res.json(user);
    } catch (error: any) {
      console.error("Error al obtener usuario:", error);
      return res.status(500).json({ error: "Error al obtener usuario" });
    }
  },
};
