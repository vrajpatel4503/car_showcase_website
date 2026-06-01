import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

if (!MONGODB_URL) {
  throw new Error("Please define MONGODB_URL");
}

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) {
      console.log("MongoDB already connected");

      return;
    }

    const dbConnect = await mongoose.connect(MONGODB_URL);

    isConnected = dbConnect.connections[0].readyState === 1;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);

    throw new Error("Database connection failed");
  }
};

export default connectDB;
