import { Router } from "express";
import UserCardsListController from "../controllers/UserCardsListController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/cardlist/new", authenticate, UserCardsListController.create);
routes.get("/cardlist/list", UserCardsListController.index);
routes.get("/cardlist/:id", UserCardsListController.show);
routes.put("/cardlist/update/:id", authenticate, UserCardsListController.update);
routes.delete("/cardlist/delete/:id", authenticate, UserCardsListController.destroy);

export default routes;
