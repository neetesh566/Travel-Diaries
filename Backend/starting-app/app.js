import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
//connections
mongoose
  .connect(
    "mongodb://admin:46lstjwhdj0xzMjO@ac-drtoc9j-shard-00-00.vqo3hzk.mongodb.net:27017,ac-drtoc9j-shard-00-01.vqo3hzk.mongodb.net:27017,ac-drtoc9j-shard-00-02.vqo3hzk.mongodb.net:27017/?ssl=true&replicaSet=atlas-108ibv-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(5000, () =>
      console.log(" Connection Successful Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));

  // module.exports = Router;
//46lstjwhdj0xzMjO
