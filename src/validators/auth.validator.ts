import { z } from "zod";

enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const SigninSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type SigninSchemaType = z.infer<typeof SigninSchema>;

export const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  role: z.nativeEnum(ROLE, { required_error: "Role is required" }),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
