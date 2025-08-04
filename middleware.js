import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  const SECRET_CODE = "667466"; // Change this to your actual secret

  if (secret === SECRET_CODE) {
    // Permit access
    return NextResponse.next();
  } else {
    // Deny access
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/panel"],
};
