import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string | undefined;

if (!MONGODB_URI) {
  // Don't throw at import time in Next.js; fail lazily on connect
  // console.warn("MONGODB_URI is not set. Add it to your .env.local file.");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached!.conn) return cached!.conn;

  if (!cached!.promise) {
    if (!MONGODB_URI) {
      throw new Error("Missing MONGODB_URI. Please set it in your environment.");
    }
    cached!.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || "matritwa",
    });
  }
  cached!.conn = await cached!.promise;
  return cached!.conn;
}
