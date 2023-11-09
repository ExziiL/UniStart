
import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://www.hs-aalen.de/semesters/20'; // URL we're scraping
const app = axios.create(); // Create a new Axios Instance

interface Information {
    titel: string;
    dates: string[];
    annotation: string;
}

export function dateScrapper(): Promise<string> {
    let data = new Promise<string>((resolve, reject) => {
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
                        let dates: string[] = getDates($(elem).find('td:nth-of-type(2)').text());
                        let annotation: string = $(elem).find('td:nth-of-type(3)').text();

                        info.push({ titel, dates, annotation });
                    })
                    resolve(JSON.stringify(info));
                }
            )
            .catch(error => {
                console.error();
                reject(JSON.stringify(error));
            }); // Error handling    .catch(console.error); // Error handlingnpm i -D @types/axios @types/cheerio
    });
    return data;
}

function getDates(res: string): string[] {
    res = res.replaceAll(/\S+\., /g, '');
    if (res.includes(' - ')) {
        let dates: string[] = res.split(' - ');
        return new Array(dates[0], dates[1]);
    }
    else {
        return new Array(res);
    }
}