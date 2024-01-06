import { NextRequest, NextResponse } from "next/server";
import prisma from "@/backend/lib/prisma";
import driver from "@/backend/lib/neo4j";
import { session } from "neo4j-driver";

export async function PUT(request: NextRequest) {
    const client = driver.session(
        { defaultAccessMode: session.READ }
    );
    try {
        const res = await request.json();

        const user = await prisma.user.findUnique({
            where: { email: res.email },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                profile: {
                    select: { isOnline: true }
                }
            }
        })

        console.log(user);


        await client.executeWrite((tsa) => {
            return tsa.run(
                `
                CREATE (u:User {
                    id: $user.id,
                    username: $user.name,
                    email: $user.email,
                    role: $user.role,
                    online: $user.online
                })
                RETURN u`,
                { user }
            )
        })
        return NextResponse.json(
            { message: "Successfull created Usernode" },
            { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Error while creating usernode",
            error: error
        }, { status: 500 });
    } finally {
        await client.close();
    }
}