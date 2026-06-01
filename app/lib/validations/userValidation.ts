import { z } from "zod";

export const userValidationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .max(40, "Full name is too long"),

  email: z
  .string()
  .trim()
  .toLowerCase()
  .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password is too long"),

  phoneNumber: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});
