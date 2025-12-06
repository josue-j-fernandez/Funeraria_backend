import { Router } from "express";
import { UserController } from "../controllers/userController";

import { authMiddleware } from "../middleware/authMiddleware";
import { AuthController } from "../controllers/authController";
const router = Router();

router.post("/login", AuthController.login);

router.use(authMiddleware);

router.get("/", UserController.getAll);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);
router.get("/:id", UserController.getById);


export default router;
