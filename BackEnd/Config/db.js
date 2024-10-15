import mongoose from "mongoose";

export const conDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('MongoDB connected');

    } catch (error) {
        
        console.error('DB connection error:', error);
        process.exit(1);
    }
};