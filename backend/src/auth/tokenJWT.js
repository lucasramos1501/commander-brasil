import jwt from "jsonwebtoken";
import auth from "../config/.auth.json";

export default {
     async create(playload) {
        const token = await jwt.sign({ playload }, auth.secret, { expiresIn: 3600});
        
        return token;
    },
}
