import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/app/api/webhook",
    "/api/webhooks(.*)",
    "/",
    "/api/webhook",
    "/community",
    "/public/assets",
    "/assets/logo.ico",
  ],
  ignoredRoutes: ["/api/webhook"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
