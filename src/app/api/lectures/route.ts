import { NextRequest, NextResponse } from "next/server";
import prisma from "@/backend/lib/prisma";

export async function GET(request: NextRequest) {
    try {
        const lectures = await prisma.lecture.findMany();

        if (!lectures) return NextResponse.json({ message: "no lectures in database" }, { status: 500 });
        return NextResponse.json({ lectures }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong while getting the lectures", error: error }, { status: 200 });
    }
}