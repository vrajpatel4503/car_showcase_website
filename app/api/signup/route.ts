import { NextResponse } from "next/server";

import connectDB from "@/app/lib/dbConnect";
import User from "@/app/model/User";
import { signUpValidationSchema } from "@/app/lib/validations/userValidation";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // connect database
    await connectDB();

    // get body data
    const body = await req.json();

    // validate data
    const validation = signUpValidationSchema.safeParse(body);

    // validation data
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // destructure data from validate
    const { fullName, email, password, phoneNumber } = validation.data;

    // check user exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        },
      );
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 8);
    // create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    // return all data
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(`Error in signup :- ${error}`);

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
