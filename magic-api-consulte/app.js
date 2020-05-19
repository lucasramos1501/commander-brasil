import app from "./src/config/server";
const port = 3030; 

require("./src/config/db");
import routes from "./src/routes/routes";

routes(app);
        
app.listen(port, ()=>{
    console.log(`On port ${port}`);
});
