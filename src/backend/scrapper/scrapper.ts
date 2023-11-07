
import axios from 'axios';
import * as cheerio from 'cheerio';
import { DateTime } from 'luxon'

const url = 'https://www.hs-aalen.de/semesters/20'; // URL we're scraping
const app = axios.create(); // Create a new Axios Instance

interface Information {
    titel: string;
    dates: DateTime[];
    annotation: string;
}


// Send an async HTTP Get request to the url
app.get(url)
    .then( // Once we have data returned ...
        response => {
            let html = response.data; // Get the HTML from the HTTP request
            let $ = cheerio.load(html)
            const table: cheerio.Cheerio = $('.table > tbody > tr');
            const info: Information[] = [];

            table.each((i, elem) => {
                let titel: string = $(elem).find('td:nth-of-type(1)').text();
                let dates: DateTime[] = getDates($(elem).find('td:nth-of-type(2)').text());
                let annotation: string = $(elem).find('td:nth-of-type(3)').text();

                info.push({ titel, dates, annotation });
            })
            console.log(info);
        }
    )
    .catch(console.error); // Error handling    .catch(console.error); // Error handlingnpm i -D @types/axios @types/cheerio

function getDates(res: string): DateTime[] {
    res = res.replaceAll(/\S+\., /g, '');
    if (res.includes(' - ')) {
        let dates: string[] = res.split(' - ');
        return new Array(DateTime.fromFormat(dates[0], 'dd.MM.yyyy', { locale: 'de' }),
            DateTime.fromFormat(dates[1], 'dd.MM.yyyy', { locale: 'de' }));
    }
    else {
        return new Array(DateTime.fromFormat(res, 'dd.MM.yyyy', {locale: 'de'} ));
    }
}