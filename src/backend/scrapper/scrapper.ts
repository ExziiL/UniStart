
import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://www.hs-aalen.de/semesters/20'; // URL we're scraping
const app = axios.create(); // Create a new Axios Instance

// Send an async HTTP Get request to the url
app.get(url)
    .then( // Once we have data returned ...
        response => {
            let html = response.data; // Get the HTML from the HTTP request
            let $ = cheerio.load(html)
            const table: cheerio.Cheerio = $('.table');
            console.log(table);
        }
    )
    .catch(console.error); // Error handling    .catch(console.error); // Error handlingnpm i -D @types/axios @types/cheerio