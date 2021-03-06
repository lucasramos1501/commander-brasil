import { Router } from "express";
import UserController from "../controllers/UserController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/user", UserController.create);
routes.get("/user/", authenticate, UserController.index);
routes.get("/user/:id", authenticate, UserController.show);
routes.put("/user/:id", authenticate, UserController.update);
routes.delete("/user/:id", authenticate, UserController.destroy);

export default routes;
