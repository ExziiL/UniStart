import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/backend/lib/prisma";
import driver from "@/backend/lib/neo4j";

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.user.findMany();
        if (!users) return NextResponse.json({
            message: "No users found"
        }, { status: 500 })
        return NextResponse.json({ users: users }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({
            message: "An error occurred while fetching users",
            error: error
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {

}

export async function DELETE(req: NextRequest) {

}