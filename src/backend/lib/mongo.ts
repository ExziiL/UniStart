import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_ADMIN));
    console.log('Connected to MongoDB');

  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    
  }
}