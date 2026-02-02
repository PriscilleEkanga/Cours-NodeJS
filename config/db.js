import mongoose from "mongoose";

const uri = `mongodb+srv://priscillegrace_db_user:${process.env.DB_PASSWORD}@cluster0.nean8rb.mongodb.net/vehiculeDB?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error :", error.message);
    process.exit(1);
  }
};

export default connectDB;
