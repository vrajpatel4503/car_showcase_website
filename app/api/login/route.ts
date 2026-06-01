import { NextResponse } from "next/server";

import User from "@/app/model/User";
import { loginValidationSchema } from "@/app/lib/validations/userValidation";
import connectDB from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const validation = loginValidationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: validation.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const { email, password } = validation.data;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Email or Password is invalid",
        },
        { status: 401 },
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Email or Password is invalid",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User login successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(`Error in login Route :- ${error}`);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
