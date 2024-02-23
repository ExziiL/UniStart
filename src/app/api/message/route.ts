import { NextRequest, NextResponse } from "next/server";
import prisma from "@/backend/lib/prisma";
import { pusherServer } from "@/backend/lib/pusher";


export async function PUT(req: NextRequest) {
    try {
        const data = await req.json();

        const message = await prisma.message.create({
            data: {
                image: data.image,
                content: data.message,
                conversation: { connect: { id: data.conversationId } },
                senderid: data.sender
            }
        });

        if (!message) return NextResponse.json({ message: "No message created" }, { status: 500 });
        await pusherServer.trigger(data.conversationId, 'new:message', message)

        return NextResponse.json({ message }, { status: 200 });
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