import connectDB from "@/app/lib/dbConnect";
import User from "@/app/model/User";

type UserInput = {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

function validateUserInput(data: any): UserInput {
  if (!data || typeof data !== "object") {
    throw new Error("Request body must be a JSON object");
  }

  const { fullName, email, password, phoneNumber } = data;

  if (!fullName || typeof fullName !== "string" || fullName.trim().length < 3) {
    throw new Error("fullName must be at least 3 characters");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("email must be a valid email address");
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    throw new Error("password must be at least 6 characters");
  }

  if (!phoneNumber || typeof phoneNumber !== "string" || !/^[0-9]{10}$/.test(phoneNumber)) {
    throw new Error("phoneNumber must be exactly 10 digits");
  }

  return {
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
    phoneNumber: phoneNumber.trim(),
  };
}

export async function createUser(data: unknown) {
  await connectDB();

  const userData = validateUserInput(data);

  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("A user with this email already exists");
  }

  const createdUser = await User.create(userData);
  return createdUser;
}
