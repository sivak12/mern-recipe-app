import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { receipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", receipesRouter);

mongoose.connect(
  "mongodb+srv://siva:mernpassword123@recipes.hhbeckw.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server Started"));
