import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load env vars from .env.local manually
const envPath = path.resolve(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");

const env = {};
envContent.split("\n").forEach((line) => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return;

  const match = trimmed.match(/^([^=]+)=(.*)$/);
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

async function createBlogBucket() {
  console.log("Creating blog-images bucket...");

  // Create bucket
  const { data, error } = await supabase.storage.createBucket("blog-images", {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "image/gif",
    ],
  });

  if (error) {
    if (error.message.includes("already exists")) {
      console.log("Bucket already exists.");
    } else {
      console.error("Error creating bucket:", error.message);
    }
  } else {
    console.log("Bucket created successfully:", data);
  }
}

createBlogBucket();
