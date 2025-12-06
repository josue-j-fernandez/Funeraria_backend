// src/seed/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed de usuarios...");

  const users = [
    {
      nombre: "Juan",
      apellidoPaterno: "Pérez",
      apellidoMaterno: "Gómez",
      cedula: "123456",
      usuario: "juan",
      contrasena: "1234",
    },
    {
      nombre: "María",
      apellidoPaterno: "Rodríguez",
      apellidoMaterno: "López",
      cedula: "234567",
      usuario: "maria",
      contrasena: "1234",
    },
    {
      nombre: "Carlos",
      apellidoPaterno: "Santos",
      apellidoMaterno: "Ramírez",
      cedula: "345678",
      usuario: "carlos",
      contrasena: "1234",
    },
    {
      nombre: "Ana",
      apellidoPaterno: "Torres",
      apellidoMaterno: "Vega",
      cedula: "456789",
      usuario: "ana",
      contrasena: "1234",
    },
    {
      nombre: "Luis",
      apellidoPaterno: "Castro",
      apellidoMaterno: "Silva",
      cedula: "567890",
      usuario: "luis",
      contrasena: "1234",
    },
    {
      nombre: "Paola",
      apellidoPaterno: "Ríos",
      apellidoMaterno: "Navarro",
      cedula: "678901",
      usuario: "paola",
      contrasena: "1234",
    },
  ];

  for (const u of users) {
    // cifrar contraseña
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
