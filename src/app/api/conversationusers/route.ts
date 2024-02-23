import driver from "@/backend/lib/neo4j";
import User from "@/types/IUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const client = driver.session();
    try {
        const currentID: string = await req.json();

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
    }finally{
        client.close();
    }
}