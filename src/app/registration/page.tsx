import RegistrationCard from "@/frontend/components/registration-card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api-calls/auth/[...nextauth]/route";

async function Registration() {
	const session = await getServerSession(authOptions);

	//if (session) redirect('/');
	return <RegistrationCard />;
}

export default Registration;
