import UserCardsList from "../models/UserCardsList";

export default {
    async create(request, response) {
        const { name, cards } = request.body;
        const cardsArray = await cards.trim().split(",");

        const createUserCardsList = await UserCardsList.create({ name, cards: cardsArray });
        return response.status(201).json(createUserCardsList);
    },

    async index(request, response) {
        const allUserCardsLists = await UserCardsList.find();   
        return response.status(200).json(allUserCardsLists);
    },

    async show(request, response){  
        const _id = request.params.id;
        
        const findCards = await UserCardsList.findOne({_id});        
        return response.status(200).json(findCards)
    },

    async update(request, response) {
        const _id = request.params.id;
    
        const updateUserCardsList = await UserCardsList.updateOne({ _id }, { name, cards});
        return response.status(200).json(updateUserCardsList);
    },

    async destroy(request, response) {
        const _id = request.params.id;

        const destroyUserCardsList = await UserCardsList.deleteOne({ _id });
        return response.status(200).json(destroyUserCardsList);
    },

}