import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {

  mongoose.set("strictQuery", false);
  mongoose.connection.once("open", () => console.log("DB connection"));
  return mongoose.connect(
    `mongodb://${process.env.DB_LINK}?retryWrites=true&w=majority`,
    { keepAlive: true }
  );
};
