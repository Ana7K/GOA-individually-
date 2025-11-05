import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected host" /*conn.connection.host */);
  } catch (err) {
    console.log(err, "mongo db is  not connected");
  }
}
