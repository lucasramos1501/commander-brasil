import { Router } from "express";
import UserController from "../controllers/UserController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/user/new", UserController.create);
routes.get("/user/list", authenticate, UserController.index);
routes.get("/user/:id", authenticate, UserController.show);
routes.put("/user/update/:id", authenticate, UserController.update);
routes.delete("/user/delete/:id", authenticate, UserController.destroy);

export default routes;
