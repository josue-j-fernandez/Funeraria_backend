// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes"; // Ajusta la ruta si tu carpeta es diferente


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // URL frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
}));

app.use("/users", userRouter);


app.get("/", (req, res) => {
  res.send("Servidor corriendo correctamente");
});

app.use((req, res, next) => {
    res.status(404).json({
        message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
