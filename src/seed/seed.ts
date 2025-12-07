// src/seed/seed.ts 
import bcrypt from "bcrypt";

import PrismaClient, { UserRole } from "@prisma/client";
const prisma = new PrismaClient.PrismaClient();

async function main() {
 console.log("Iniciando seed de usuarios...");

 const users = [
  {
   nombre: "Juan",
   apellidoPaterno: "Pérez",
   apellidoMaterno: "Gómez",
   cedula: "123456",
   usuario: "admin", 
   contrasena: "1234",
  rol: "ADMIN", 
  },
  {
   nombre: "María",
   apellidoPaterno: "Rodríguez",
   apellidoMaterno: "López",
   cedula: "234567",
   usuario: "maria",
   contrasena: "1234",
  rol: "USER", 
  },

 ];

 for (const u of users) {

  const hashedPassword = await bcrypt.hash(u.contrasena, 10);

  await prisma.user.upsert({
   where: { usuario: u.usuario },
   update: {},
   create: {
    nombre: u.nombre,
    apellidoPaterno: u.apellidoPaterno,
    apellidoMaterno: u.apellidoMaterno,
    cedula: u.cedula,
    usuario: u.usuario,
    contrasena: hashedPassword,

    rol: UserRole.ADMIN,

   },
  });
 }

 console.log("Seed completado con éxito!");
}

main()
 .catch((e) => {
  console.error(e);
  process.exit(1);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });