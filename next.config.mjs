/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [__dirname, "src/styles"],
  },
  experimental: {
    typedRoutes: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};
export default config;
