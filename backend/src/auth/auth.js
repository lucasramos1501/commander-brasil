import User from "../models/User";
import tokenJWT from "./tokenJWT";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../config/.auth.json";

export default {
    async login(request, response) {
        const { username, password } = request.body;
        const user = await User.findOne({ username }).select("+password");

        if (!user) {
            return response.status(401)
                .send({ auth: false, msg: "User name incorrect or not exist or password invalid" });
        }

        if (bcrypt.compare(password, user.password)) {
            user.password = undefined;
            const token = await tokenJWT.create(user);
            return response.status(200).json({ auth: true, token: token });
        }

        return response.status(401).json({ auth: false, msg: "User name incorrect or not exist or password invalid" });
    },

    async logout(request, response) {
        return response.status(200).send({ auth: false, token: undefined });
    },

    async authenticate(request, response, next) {
        try {
            const authorization = request.headers.authorization;

            if (!authorization) {
                return response.status(401).send({ auth: false, msg: "Token not found" })
            };

            const [, token] = authorization.split(" ");

            if (!token) { 
                return response.status(401).send({ auth: false, msg: "Token bad formatted" }) 
            };

            const decode = await jwt.verify(token, auth.secret);

            request.user = decode.playload;

            next();
        } catch (err) {
            return response.status(401).send({ auth: false, msg: err.message });
        }

    }
}
