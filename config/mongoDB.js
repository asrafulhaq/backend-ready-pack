import mongoose from "mongoose";

// create mongoDB Connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_STRING);
    console.log(`mongodb connected successful`.bgMagenta.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// export connection
export default mongoDBConnect;
