import express from "express"
import bodyParser from "body-parser";
import { dateScrapper } from "@/backend/scrapper/scrapper";

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get('/hs-dates', async (_req, res) => {
    res.send(await dateScrapper());
});

api.listen(3001, () => {
    console.log('listening on port 3001');
});