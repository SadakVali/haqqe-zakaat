import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    isVerified: boolean;
    role: string;
    email: string;
    image: string;
  }
  interface Session {
    user: {
      id: string;
      role: string;
      isVerified: boolean;
      email: string;
      image: string;
    };
  }
}

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     isVerified: boolean;
//     role: string;
//   }
// }
