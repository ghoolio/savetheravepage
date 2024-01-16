import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    //if cached is already connected, then the connection runs for first time
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

    //either connect to existing cached connection or create a new connection
    cached.promise =
        cached.promise ||
        mongoose.connect(MONGODB_URI, {
            dbName: "evently",
            bufferCommands: false,
        });

    cached.conn = await cached.promise;

    return cached.conn;
};
