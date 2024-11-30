const express = require("express"); 
const dotenv = require("dotenv").config(); 
const cors = require("cors");
const app = express(); 

const config = require("./config/dbConfig")()

app.use(cors()); 
app.use(express.json()); 

const router = express.Router(); 

const RoutesTutorials = require("./Routes/Tutorials.Route");
const RoutesKeywords = require("./Routes/Keywords.Route");
const RoutesType = require("./Routes/Type.Route");
const RoutesLibrary = require("./Routes/Library.Route");
const RoutesCategory = require("./Routes/Category.Route");

app.use("/api", router); 

router.use("/Library", RoutesLibrary);
router.use("/Type", RoutesType);
router.use("/Keywords", RoutesKeywords);
router.use("/Tutorials", RoutesTutorials);
router.use("/Category", RoutesCategory);


const PORT = process.env.PORT || 8096; 

app.listen(PORT, () => {
  console.log("HTTP Server started on port :", PORT);
});
