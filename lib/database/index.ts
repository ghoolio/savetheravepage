import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async (dbName?: string) => {
  if (dbName) {
    // If a new dbName is provided, close the existing connection
    if (cached.conn) {
      await cached.conn.close();
    }
    // Reset the cached connection
    cached = { conn: null, promise: null };
  }

  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: dbName || 'dataghool', // Use the provided dbName or default to 'dataghool'
    bufferCommands: false,
  });

  cached.conn = await cached.promise;

  return cached.conn;
}
