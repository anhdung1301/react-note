import mongoose from "mongoose";
import { userModel } from "../schemas/user.schema.js";
import { dbConnect } from "../mongo/index.js";

async function clear() {

  await dbConnect();

  await userModel.deleteMany({});

  console.log("DB cleared");
}

clear().then(() => {
  mongoose.connection.close();
});
