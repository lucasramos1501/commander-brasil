import { Router } from "express";
import magicApi from"../services/magicApi";

const routes = Router();

routes.get("/find", magicApi.index);
routes.get("/find/:id", magicApi.show);

export default routes;