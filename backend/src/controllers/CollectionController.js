import Collection from "../models/Collection";

export default {
    async create(request, response) {
        const { name, cards, sideboard } = request.body;
        const cardsArray = await cards.trim().split(",");

        const createCollection = await Collection.create({ name, cards: cardsArray, sideboard });
        return response.status(201).json(createCollection);
    },

    async index(request, response) {
        const allCollections = await Collection.find();
        return response.status(200).json(allCollections);
    },

    async show(request, response) {
        const _id = request.params.id;

        const findCards = await Collection.findOne({ _id });
        return response.status(200).json(findCards)
    },

    async update(request, response) {
        const _id = request.params.id;
        const { name, cards, sideboard } = request.body;
        const cardsArray = await cards.trim().split(",");

        const updateCollection = await Collection.updateOne({ _id }, { name, cards: cardsArray, sideboard });
        return response.status(200).json(updateCollection);
    },

    async destroy(request, response) {
        const _id = request.params.id;

        const destroyCollection = await Collection.deleteOne({ _id });
        return response.status(200).json(destroyCollection);
    },

}