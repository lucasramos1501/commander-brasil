import {Schema,model} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    email: {type: String, required: true},
    userPhoto: {type: String, default: undefined},
    collections: [{type: Schema.Types.ObjectId, ref: "collection"}],   
    userCardList: [{type: Schema.Types.ObjectId}],
    type: {type: String, default: "user", required: true}
});

UserSchema.pre("save", async function(next){
    const hash = await  bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

export default model("user", UserSchema);   