const express = require("express");
const app = express();
const routes = require("./routes/routes");


const PORT = process.env.PORT || 3005;



//middlewares
app.use(express.json());
app.use("/", routes);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
