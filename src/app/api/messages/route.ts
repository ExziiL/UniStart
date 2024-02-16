import prisma from "@/backend/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const messages = await prisma.conversation.findUnique({
            where: { id: body.conversationid },
            include: {
                messages: {
                    orderBy: { createdAt: 'desc' },
                    skip: 0,
                    take: 100 //TODO make this variable

                }
            }
        })

        if (!messages) return NextResponse.json({ message: "No messages were found" }, { status: 500 });
        return NextResponse.json({ ...messages }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error while getting messages", error: error }, { status: 500 });

    }
}