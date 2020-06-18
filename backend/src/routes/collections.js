import { Router} from "express";
import CollectionController from "../controllers/CollectionController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/collection/", authenticate, CollectionController.create);
routes.get("/collection/", CollectionController.index);
routes.get("/collection/:id", CollectionController.show);
routes.put("/collection/:id", authenticate, CollectionController.update);
routes.delete("/collection/:id", authenticate, CollectionController.destroy);

export default routes;
