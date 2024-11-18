import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/ask-question(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook",
  "/question/:id",
  "/tags",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",
  "/api/chatgpt",
]);

const middleware = clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export default middleware;

export const config = {
  matcher: [
    // Match all routes except for Next.js internals and static files
    "/((?!.*\\..*|_next).*)",
    // Match the root route
    "/",
    // Match API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/ask-question(.*)",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/",
//   "/api/webhook",
//   "question/:id",
//   "/tags",
//   "/tags/:id",
//   "/profile/:id",
//   "/community",
//   "/jobs",
// ]);

// const middleware = clerkMiddleware(async (auth, request) => {
//   if (!isPublicRoute(request)) {
//     await auth.protect();
//   }
// });

// export default middleware;

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };
