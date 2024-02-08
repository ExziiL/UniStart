import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/backend/lib/prisma";


export async function GET(request: NextRequest) {
    try {
        const { email } = Object.fromEntries(request.nextUrl.searchParams);
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { id: true }
        });

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        // console.log(error);
        return NextResponse.json({
            message: "An error occurred while fetching user",
            error: error
        }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Missing information" },
                { status: 400 });
        }

        const hash = await bcrypt.hash(password, 13);


        const user = await prisma.user.create({
            data: { name: name, email: email, password: hash }
        });

        return NextResponse.json({ message: "User registered", user },
            { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while registering",
            error: error
        }, { status: 500 });
    }
}