// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"; // Importamos JwtPayload

const JWT_SECRET = process.env.JWT_SECRET || "mi-secreto";



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
 const authHeader = req.headers.authorization;

 if (!authHeader) {
  return res.status(401).json({ error: "No se proporcionó token" });
 }
  

 if (!authHeader.startsWith("Bearer ")) {
  return res.status(401).json({ error: "Formato de token inválido. Use 'Bearer <token>'" });
 }

  // Extracción del token
 const token = authHeader.split(" ")[1]; 
 if (!token) {
  return res.status(401).json({ error: "Token no encontrado después de Bearer" });
 }

 try {
  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload; 
  
  req.user = decoded; 
  next();

 } catch (error) {
    // Esto captura TokenExpiredError, JsonWebTokenError
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};