import express from "express";
import dotenv from "dotenv";
import router from "./routes/tutorial.route"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
