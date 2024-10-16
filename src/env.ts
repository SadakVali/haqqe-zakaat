const env = {
  environment: {
    NODE_ENV: process.env.NODE_ENV || "",
    NEXT_PUBLIC_BASE_URL_LOCAL: process.env.NEXTAUTH_URL || "",
  },
  token: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
  },
  github: {
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID || "",
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET || "",
  },
};

export default env;
