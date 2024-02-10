import { NextRequest, NextResponse } from "next/server";
import driver from "@/backend/lib/neo4j";
import User from "@/types/IUser";

export async function POST(req: NextRequest) {
    try {
        const currentID: string = await req.json();
        const client = driver.session();

        const response = await client.executeRead((tsx) => {
            return tsx.run(` 
                MATCH (u:User)
                WHERE NOT u.id = $currentID
                WITH collect(u) as users
                RETURN users`,
                { currentID });
        })
        if (!response) return NextResponse.json({
            message: "No users found"
        }, { status: 500 })

        const users = Array<User>()
        response.records.forEach((record) => {
            let node = record.get('users')
            users.push(node[0]?.properties);
        })

        return NextResponse.json({ users }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({
            message: "An error occurred while fetching users",
            error: error
        }, { status: 500 });
    }
}