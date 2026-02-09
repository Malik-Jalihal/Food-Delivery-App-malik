import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const uri = process.env.DB_URL || "mongodb://localhost:27017/food-del";
    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1);
    }
};

// Uses `process.env.DB_URL`. Set DB_URL in backend/.env or your environment.