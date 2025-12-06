// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes"; // Ajusta la ruta si tu carpeta es diferente


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // si vas a usar cookies o headers de autorización
}));

// Montamos el router en /users
app.use("/users", userRouter);

// Ruta de prueba para verificar que el servidor funciona
app.get("/", (req, res) => {
  res.send("Servidor corriendo correctamente");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
