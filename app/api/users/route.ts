import { NextResponse } from "next/server";
import { createUser } from "./controller";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await createUser(body);
    const userObj = user && typeof user === "object" ? (user as any).toObject?.() ?? user : user;

    if (userObj && typeof userObj === "object") {
      delete (userObj as any).password;
    }

    return NextResponse.json({ success: true, data: userObj }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unable to create user",
      },
      { status: 400 },
    );
  }
}
