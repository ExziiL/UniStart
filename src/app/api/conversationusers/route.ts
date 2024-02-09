import { NextRequest, NextResponse } from "next/server";
import driver from "@/backend/lib/neo4j";

export async function POST(req: NextRequest) {
    try {
        const currentuser = await req.json();
        const client = driver.session();

        const users = await client.executeRead((tsx) => {
            return tsx.run(` 
                MATCH (u:User)
                WHERE NOT u.id = "$user.id"
                WITH collect(u) as users
                RETURN users`,
                {user: currentuser});
        })

        console.log(users);
        

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