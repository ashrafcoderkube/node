import express from "express";
import dotenv from "dotenv";
import router from "./routes/tutorial.route";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/health", (req: express.Request, res: express.Response) => {
  res.send("server started");
  return;
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
