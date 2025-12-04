import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { RateLimiterMongo } from "rate-limiter-flexible";

dotenv.config();
const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

let mongoConn, mongooseInstance;

const dbConnect = async () => {
  try {
    mongooseInstance = await mongoose.connect(MONGO_URI);
    mongoConn = mongooseInstance.connection;
  } catch (err) {
    console.log(err);
  }

  // const opts = {
  //   storeClient: mongoConn,
  //   points: 10,
  //   duration: 1,
  // }

  let remoteAddress = "192.168.100.5";

  const rateLimiterMongo = new RateLimiterMongo({
    storeClient: mongoConn,
    points: 10,
    duration: 1,
  });

  rateLimiterMongo
    .consume(remoteAddress, 2)
    .then((rateLimiterRes) => {
      console.log(rateLimiterRes);
    })
    .catch((rateLimiterRes) => {
      // not enough points to consume
      console.log("aq?", rateLimiterRes);
    });
};

app.listen(PORT, () => {
  dbConnect();
  console.log("chilling at ", PORT);
});
