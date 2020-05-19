import { Router} from "express";
import CollectionController from "../controllers/CollectionController";
import authController from "../auth/auth";

const routes = Router();

const { authenticate } = authController;

routes.post("/collection/new", authenticate, CollectionController.create);
routes.get("/collection/list", CollectionController.index);
routes.get("/collection/:id", CollectionController.show);
routes.put("/update/collection/:id", authenticate, CollectionController.update);
routes.delete("/delete/collection/:id", authenticate, CollectionController.destroy);

export default routes;
