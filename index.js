const express = require("express"); 
const dotenv = require("dotenv").config(); 
const cors = require("cors");
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

const router = express.Router(); 

const RoutesTutorials = require("./Routes/Tutorials.Route");
const RoutesKeywords = require("./Routes/Keywords.Route");
const RoutesType = require("./Routes/Type.Route");
const RoutesLibrary = require("./Routes/Library.Route");
const RoutesCategory = require("./Routes/Category.Route");

apiV1Router.use("/Library", RoutesLibrary);
apiV1Router.use("/Type", RoutesType);
apiV1Router.use("/Keywords", RoutesKeywords);
apiV1Router.use("/Tutorials", RoutesTutorials);
apiV1Router.use("/Category", RoutesCategory);


app.use("/api", router); 

const PORT = process.env.PORT || 8096; 

app.listen(PORT, () => {
  console.log("HTTP Server started on port :", PORT);
});
