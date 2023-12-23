
import axios from 'axios';
import * as cheerio from 'cheerio';
import UniDate from '../models/uniDates';
import { connectMongo } from '../databases/mongo';
import { resolve } from 'path';

const uri = 'https://www.hs-aalen.de/semesters/'; // URL we're scraping
const app = axios.create(); // Create a new Axios Instance

export type Information = {
    title: string;
    dates: string[];
    annotation: string;
}

function semesterUrl(year: number, month: number): number {

    let semester = year - 2013;

    if (month >= 3 && month < 10) {
        semester += (year - 2014)
    } else if (month < 3) {
        semester += ((year - 1) - 2013)
    }
    else {
        semester += (year - 2013)
    }

    return semester;
}

function getShort(page: number, date: Date): string {
    let year = date.getFullYear().toString().substring(2);
    if (page % 2 == 0) { return "WS" + year }
    else {
        return "SoSe" + (date.getMonth() < 3 ? (Number(year) - 1) : year)
    }
}

export const dateScrapper = (date: Date): Promise<string> => {

    const page = semesterUrl(date.getFullYear(), date.getMonth());
    const promise = new Promise<string>(async (resolve, reject) => {
        try {
            await connectMongo();

            const uniInfo = await UniDate.findOne(
                {
                    semester: getShort(page, date)
                })
                .select('infos');

            if (uniInfo) {
                resolve(JSON.stringify(uniInfo));
            } else {
                app.get(uri + page)
                    .then(async response => {

                        let html = response.data; // Get the HTML from the HTTP request
                        let $ = cheerio.load(html)
                        const table: cheerio.Cheerio = $('.table > tbody > tr');

                        const Info: Information[] = [];

                        table.each((i, elem) => {
                            let title: string = $(elem).find('td:nth-of-type(1)').text();
                            let dates: string[] = getDates($(elem).find('td:nth-of-type(2)').text());
                            let annotation: string = $(elem).find('td:nth-of-type(3)').text();

                            Info.push({ title, dates, annotation });
                        })

                        await UniDate.create({ semester: getShort(page, date), infos: Info })

                        resolve(JSON.stringify(Info));
                    })
            }
        } catch (error) {
            reject(error);
        }
    });
    return promise;
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

/* (async function main() {
    const res = await dateScrapper(new Date());
    console.log(JSON.parse(res));

})(); */