import { Router } from "express";
import multer from "../middleware/multer";
import uploadController from "../controllers/uploadController";
import authController from "../auth/auth";

const { authenticate } = authController;

const routes = Router();

routes.get("/upload/:id", authenticate, multer.single("image"), uploadController.update);


export default routes;