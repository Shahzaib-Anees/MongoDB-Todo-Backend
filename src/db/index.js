import mongoose from "mongoose";
const connectDB = async (MONGO_URI) => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}todo`);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    return connectionInstance.connection.host;
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
