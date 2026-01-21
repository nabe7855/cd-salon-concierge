"use server";

import { cookies } from "next/headers";

export async function loginAction() {
  console.log("[Server Action] loginAction called");
  const cookieStore = await cookies();

  try {
    cookieStore.set("admin_logged_in", "true", {
      path: "/",
      maxAge: 86400, // 1 day
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    console.log("[Server Action] Cookie set successfully");
    return { success: true };
  } catch (error) {
    console.error("[Server Action] Error setting cookie:", error);
    // Return success: false or rethrow.
    // For this debug bypass, we might want to just return success anyway if we can't set cookie?
    // No, if cookie fails, login fails.
    throw error;
  }
}
