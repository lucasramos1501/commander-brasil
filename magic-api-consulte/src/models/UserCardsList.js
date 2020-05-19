import {Schema,model} from "mongoose";

const UserCardsListSchema = new Schema({
    name: {type: String, required: true},
    cards: [{type: Number, required: true}],
})

export default model("user-cards-list", UserCardsListSchema);