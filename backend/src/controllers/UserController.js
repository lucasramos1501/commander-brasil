import User from "../models/User";
import tokenJWT from "../auth/tokenJWT";

export default {
    async create(request, response) {
        const { username, password, email } = request.body;
        const user = await User.findOne({ username });

        if (!user) {
            const userCreated = await User.create({ username, password, email });
            const token = await tokenJWT.create(userCreated);

            return response.status(200).json({ auth: true, token: token });
        }
        return response.status(200).json({ auth: false, token: undefined });
    },

    async index(request, response) {
        const allUsers = await User.find();
        return response.status(200).json(allUsers);
    },

    async show(request, response) {
        const _id = request.params.id;
        const findUser = await User.findOne({ _id });

        return response.status(200).json(findUser);
    },

    async update(request, response) {
        const _id = request.params.id;
        const { username, password, email } = request.body;

        const updateUser = await User.updateOne({ _id }, { username, password, email });
        return response.status(200).json(updateUser);
    },

    async destroy(request, response) {
        const _id = request.params.id;

        const destroyUser = await User.deleteOne({ _id });
        return response.status(200).json(destroyUser);
    },

}