import mongoose from "mongoose";

mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://ramos:ramos@cluster0-thsyv.mongodb.net/magic-api-consulte?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database on!");
    })
    .catch(error => {
        console.log(`Error to try connect database: ${error}`);
    })

export default mongoose;