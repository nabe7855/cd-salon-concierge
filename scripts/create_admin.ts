import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Load env vars from .env.local manually
const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");

const env: Record<string, string> = {};
envContent.split("\n").forEach((line) => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1].trim()] = match[2].trim();
  }
});

const supabaseUrl = env["NEXT_PUBLIC_SUPABASE_URL"];
const supabaseKey = env["NEXT_PUBLIC_SUPABASE_ANON_KEY"];

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  console.log("Creating user: info-callcenter@osukan.com");
  const { data, error } = await supabase.auth.signUp({
    email: "info-callcenter@osukan.com",
    password: "123456",
  });

  if (error) {
    console.error("Error creating user:", error.message);
  } else {
    console.log("User created successfully:", data.user?.id);
    console.log(
      "Session:",
      data.session
        ? "Created (Auto-confirmed)"
        : "None (Check email for confirmation)",
    );
  }
}

createAdmin();
