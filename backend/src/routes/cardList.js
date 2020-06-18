import { Router } from "express";
import UserCardsListController from "../controllers/UserCardsListController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/cardlist/", authenticate, UserCardsListController.create);
routes.get("/cardlist/", UserCardsListController.index);
routes.get("/cardlist/:id", UserCardsListController.show);
routes.put("/cardlist/:id", authenticate, UserCardsListController.update);
routes.delete("/cardlist/:id", authenticate, UserCardsListController.destroy);

export default routes;
