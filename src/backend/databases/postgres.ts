import { Client } from "pg";
import {config} from "dotenv";

config();

const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PG_USER,
            host: process.env.PG_HOST,
            port: 5432,
            database: process.env.PG_DATABASE,
            password: process.env.PG_PASSWORD
            
        })
 
        await client.connect()
        const res = await client.query('CREATE TABLE some_table (id INTEGER PRIMARY KEY, name VARCHAR);')
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()