import driver from "@/backend/lib/neo4j";
import prisma from "@/backend/lib/prisma";
import { conversation } from "@prisma/client";
import bcrypt from "bcryptjs";
import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const client = driver.session();

    try {
        const { id } = await req.json();

        const result = await client.executeRead((tsx) => {
            return tsx.run(`
            MATCH (u:User {id: $id})-[:MEMBER]-(c:Conversation)-[:MEMBER]-(receiver:User)
            RETURN c as conversation, receiver`, 
            { id }
            )
        })
        if (!result) return NextResponse.json({ message: "No conversations aviable" }, { status: 500 })

        const conversations = result.records.map(record => {
            let obj = Object();
            record.keys.forEach(key => {
                obj[key] = record.get(key)?.properties;
            });
            return obj;
        }); 
        return NextResponse.json({ conversations }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while getting conversations", error: error }, { status: 500 })
    }finally{
        client.close();
    }
}

export async function PUT(req: NextRequest) {
    const client = driver.session();

    try {
        const { isgroup, members } = await req.json();
        const conversationMongo = await prisma.conversation.create({});

        if (!conversationMongo) { return NextResponse.json({ message: "Creating Conversation failed" }, { status: 500 }); }
        let match = "MATCH ";
        let createRelation = ""
        let createConversation = ' CREATE ( conversation:Conversation {id: $conversation.id, lastmessage: "", group: $isgroup})'

        for (let i = 1; i <= members.length; i++) {
            match += "(user" + i + ":User {id: '" + members[i - 1] + "'})"
            createRelation += " CREATE (conversation)-[:MEMBER]->(user" + i + ")";
            if (i < members.length) match += ", ";
        }

        const query = match + createConversation + createRelation + " RETURN *"
        const conversationNeo4j = await client.executeWrite((tsx) => {
            return tsx.run(query, { conversation: conversationMongo, members, isgroup });
        });

        if (!conversationNeo4j) return NextResponse.json({ message: "Node Creation failed" }, { status: 500 });

        const conversations = conversationNeo4j.records.flatMap(record => {
            return record.keys.map(key => ({ [key]: record.get(key)?.properties }));
        });
        return NextResponse.json({conversations}, { status: 200 });
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