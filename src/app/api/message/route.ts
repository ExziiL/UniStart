import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/backend/lib/prisma";


export async function PUT(req: NextRequest) {
    try {
        const data = await req.json();

        console.log(data);


        const result = await prisma.message.create({
            data: {
                image: data.image,
                content: data.message,
                conversation: { connect: { id: data.conversationId } },
                senderid: data.sender
            }
        });

        if (!result) return NextResponse.json({ message: "No message created" }, { status: 500 });
        return NextResponse.json({ message: "message created", data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating message", error: error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    //TODO Update a Message
}

export async function DELETE(req: NextRequest) {
    //TODO Delete a Message
}