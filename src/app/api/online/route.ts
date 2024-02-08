import { NextRequest, NextResponse } from "next/server";
import driver from "@/backend/lib/neo4j";
import { session } from "neo4j-driver";

export async function POST(request: NextRequest) {
    const client = driver.session(
        { defaultAccessMode: session.READ }
    );
    try {
        const res = await request.json();

        await client.executeWrite((tsa) => {
            return tsa.run(
                `
                MATCH (u:User { email: $email })
                SET u.online = $online
                RETURN u`,
                { email: res.useremail, online: res.online }
            )
        })
        return NextResponse.json(
            { message: "Successfull changed Usernode" },
            { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Error while changing usernode",
            error: error
        }, { status: 500 });
    } finally {
        await client.close();
    }
}