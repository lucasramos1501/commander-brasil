import { Router } from "express";
import auth from"../auth/auth";

const routes = Router();

routes.post("/login", auth.login);
routes.get("/logout", auth.logout);


export default routes;