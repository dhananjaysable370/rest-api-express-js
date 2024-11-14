import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./lib/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 10000 }));
app.set('view engine', 'ejs');
dotenv.config({ path: './.env' });

const port = process.env.PORT || 3000;
const MongoUri = process.env.MONGODB_URI;

dbConnection(MongoUri)
  .then(() => {
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", userRouter); // This is the route for the user API