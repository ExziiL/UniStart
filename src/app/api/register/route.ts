import { connectMongo } from "@/backend/databases/mongo";
import User from "@/backend/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { log } from "console";
//import { NextApiRequest } from "next";

export async function PUT(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();
        const hash = await bcrypt.hash(password, 13);

        await connectMongo();
        await User.create({ name, email, password: hash });

        return NextResponse.json({ message: "User registered" },
            { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while registering",
            error: error
        }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        await connectMongo();      

        const { email } = Object.fromEntries(request.nextUrl.searchParams);
        const user = await User.findOne({ email }).select('_id');
        
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "An error occurred while fetching user",
            error: error
        }, { status: 500 });
    }
}