import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/backend/lib/prisma";
import driver from "@/backend/lib/neo4j";


export async function PUT(req: NextRequest) {
    const client = driver.session();

    try {
        const { isgroup } = await req.json();
        const resultMongoDB = prisma.conversation.create({});

        if (!resultMongoDB) { return NextResponse.json({ message: "Creating Conversation failed" }, { status: 500 }); }

        const resultNeo4j = await client.executeWrite((tsx) => {
            return tsx.run(`
                CREATE ( c:Conversation {
                    id: conversation.id,
                    lastmessage: "",
                    group: isgroup}
                    )
                    RETURN c`,
                { resultMongoDB, isgroup });
        });

        if (!resultNeo4j) return NextResponse.json({ message: "Node Creation failed" }, { status: 500 });
        return NextResponse.json({ message: "Node Creation succeeded" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error while creating node", error: error }, { status: 500 });
    } finally {
        client.close();
    }
}



export async function DELETE(req: NextRequest) {
    try {
        const data = await req.json();
        const result = prisma.conversation.delete({ where: { id: data.id } });

        if (!result) return NextResponse.json({ message: "Could not delete conversation" }, { status: 500 })
        return NextResponse.json({ message: "Message deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error while deleting conversation", error: error }, { status: 500 })
    }
}