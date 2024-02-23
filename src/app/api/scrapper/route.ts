
import * as cheerio from 'cheerio';
import prisma from '@/backend/lib/prisma';
import { Infos } from '@prisma/client';
import { NextResponse } from 'next/server';

const uri = 'https://www.hs-aalen.de/semesters/'; // URL we're scraping

export async function GET() {
    try {
        const date = new Date();
        const page = semesterUrl(date.getFullYear(), date.getMonth());
        const semeter = getShort(page, date);
        let appointments: Infos[] = [];

        const semesterInfo = await prisma.appointment.findFirst({
            where: { semester: semeter }
        })

        if (!semesterInfo) {
            const response = await fetch(uri + page, { method: 'GET' })

            let $ = cheerio.load(await response.text());
            const table: cheerio.Cheerio = $('.table > tbody > tr');

            table.each((i, elem) => {
                let title: string = $(elem).find('td:nth-of-type(1)').text();
                let dates: string[] = getDates($(elem).find('td:nth-of-type(2)').text());
                let annotation: string = $(elem).find('td:nth-of-type(3)').text();

                appointments.push({ title, dates, annotation });
            })

            await prisma.appointment.create({ data: { semester: semeter, infos: appointments } })

        } else {
            appointments = semesterInfo.infos;
        }
        return NextResponse.json({ appointments }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "An error occurred while fetchin the appointments",
                error
            },
            { status: 500 });
    }
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

function getShort(page: number, date: Date): string {
    let year = date.getFullYear().toString().substring(2);
    if (page % 2 == 0) { return "WS" + year }
    else {
        return "SoSe" + (date.getMonth() < 3 ? (Number(year) - 1) : year)
    }
}