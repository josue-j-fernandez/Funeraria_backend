import { prisma } from "../config/prismaClient";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mi-secreto"; 



export const UserService = {
  async getAll() {
    return prisma.user.findMany();
  },

  async create(data: any) {
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    return prisma.user.create({
      data: { ...data, contrasena: hashedPassword },
    });
  },

  async update(id: number, data: any) {
    if (data.contrasena) {
      data.contrasena = await bcrypt.hash(data.contrasena, 10);
    }
    return prisma.user.update({
      where: { id },
      data,
    });
  },


  async delete(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  },

  async getById(id: number) {
  return prisma.user.findUnique({
    where: { id }
  });},


  async login(usuario: string, contrasena: string) {
    const user = await prisma.user.findUnique({ where: { usuario } });
    if (!user) throw new Error("Usuario no encontrado");

    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!passwordMatch) throw new Error("Contraseña incorrecta");

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, usuario: user.usuario },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, user };
  },


};

