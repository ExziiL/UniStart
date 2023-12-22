import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_ADMIN));
    console.log('Connected to MongoDB');

  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    
  }
}



/* import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';

config();

const uri = "mongodb+srv://" + process.env.MONGODB_ADMINUSER + ":" + process.env.MONGODB_ADMINPASSWORD + "@cluster0.joewohf.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function getOneFromMongo(collection: string, query: Object, options: Object) {
  await client.connect();

  await client.db("uni-start").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  const db = client.db("uni-start");
  const collect = db.collection(`${collection}`);

  const result = await collect.findOne(query, options);

  if (result) return { exists: result !== null, result: result }
  else return { exists: result !== null, result: {} }
}

export async function setMongoSingleData(collection: string, data: Object) {
  try {
    await client.connect();

    const db = client.db("uni-start");
    const collect = db.collection(`${collection}`);

    collect.insertOne(data);
  } catch (error) {

  }
} */