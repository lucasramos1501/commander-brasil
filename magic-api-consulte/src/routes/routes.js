import api from "./api";
import cardList from "./cardList";
import collections from "./collections";
import user from "./user";
import auth from "./auth";
import upload from "./upload";

export default app => {
    app.use(api);
    app.use(cardList);
    app.use(collections);
    app.use(user);
    app.use(auth);
    app.use(upload);
}
