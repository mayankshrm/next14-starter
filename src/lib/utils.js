import mongoose from "mongoose";

const connection = {};
const ConnectDB = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error("not connected to DB");
  }
};


export default ConnectDB;