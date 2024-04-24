import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/app/api/webhook",
    "/api/webhooks(.*)",
    "/",
    "/api/webhook",
    "/community",
  ],
  ignoredRoutes: ["/api/webhook", "/newrank"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
