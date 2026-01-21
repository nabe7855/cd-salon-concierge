"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction() {
  // Set the cookie on the server side
  // Note: In Next.js 15+, cookies() might be async, but in 14 it's sync-like or async.
  // Next.js 16 (mentioned in logs) likely requires await cookies() if it's the very latest,
  // but standard usage often allows: cookies().set(...)
  // Checking log: "Next.js 16.1.1". cookies() is async in 15+.

  const cookieStore = await cookies();

  cookieStore.set("admin_logged_in", "true", {
    path: "/",
    maxAge: 86400, // 1 day
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  // Redirect to admin page
  redirect("/admin");
}
