// src/services/userServicio.ts
import { prisma } from "../config/prismaClient";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const USER_PUBLIC_FIELDS = {
    id: true,
    nombre: true,
    apellidoPaterno: true,
    apellidoMaterno: true,
    cedula: true,
    usuario: true,

};

const JWT_SECRET = process.env.JWT_SECRET || "mi-secreto"; 


export const UserService = {
 async getAll() {

  return prisma.user.findMany({
        select: USER_PUBLIC_FIELDS,
    });
 },

 async create(data: any) {
  const hashedPassword = await bcrypt.hash(data.contrasena, 10);
  return prisma.user.create({
   data: { ...data, contrasena: hashedPassword },
   select: USER_PUBLIC_FIELDS,
  });
 },

 async update(id: number, data: any) {
  if (data.contrasena) {
   data.contrasena = await bcrypt.hash(data.contrasena, 10);
  }
  return prisma.user.update({
   where: { id },
   data,
   select: USER_PUBLIC_FIELDS,
  });
 },


 async delete(id: number) {
  return prisma.user.delete({
   where: { id },
  });
 },

 async getById(id: number) {
  return prisma.user.findUnique({
   where: { id },
   select: USER_PUBLIC_FIELDS,
  });
 },


 async login(usuario: string, contrasena: string) {
  const userWithHash = await prisma.user.findUnique({ where: { usuario } });
  
  if (!userWithHash) throw new Error("Usuario no encontrado");

  const passwordMatch = await bcrypt.compare(contrasena, userWithHash.contrasena);
  if (!passwordMatch) throw new Error("Contraseña incorrecta");
    const { contrasena: _, ...userWithoutPassword } = userWithHash;

  // Generar token
  const token = jwt.sign(
   { id: userWithHash.id, usuario: userWithHash.usuario },
   JWT_SECRET,
   { expiresIn: "1h" }
  );

  //Devolver el objeto sin la contraseña
  return { token, user: userWithoutPassword };
 },
};

