import { Schema, model } from "mongoose";

const CollectionSchema = new Schema({
    name: { type: String, required: true },
    likes: { type: String },
    deslikes: { type: Number },
    comments: { type: Number },
    cards: [{ type: Number, required: true }],
    sideboard: [{ type: Number, required: true }],
    user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
})

export default model("collection", CollectionSchema);