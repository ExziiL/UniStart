import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/backend/lib/prisma";


export async function PUT(req: NextRequest) {
    try {
        const data = await req.json();

        const result = await prisma.message.create({
            data: { senderid: data.id, image: data.image, content: data.message, conversationid: data.convoId }
        });

        if (!result) return NextResponse.json({ message: "No message created" }, { status: 500 });
        return NextResponse.json({ message: "message created", data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating message", error: error }, {status: 500 });
    }
}

export async function POST(req: NextRequest) {

}

export async function DELETE(req: NextRequest) {

}