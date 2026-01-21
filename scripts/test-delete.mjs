import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjemsviczsdusrnlgfnb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZW1zdmljenNkdXNybmxnZm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMDQwMDksImV4cCI6MjA4MzY4MDAwOX0.sIc3lCuptIzadnZlDPsnEyZ7WXMGBdAkb8o9Yqb-7gk";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testDelete() {
  console.log("Fetching a post to delete...");
  const { data: posts, error: fetchError } = await supabase
    .from("blog_posts")
    .select("id, title")
    .limit(1);

  if (fetchError) {
    console.error("Fetch error:", fetchError);
    return;
  }

  if (!posts || posts.length === 0) {
    console.log("No posts found to delete.");
    return;
  }

  const post = posts[0];
  console.log(`Found post: ${post.title} (${post.id})`);

  console.log(`Attempting to delete post ${post.id}...`);
  const { error: deleteError } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", post.id);

  if (deleteError) {
    console.error("Delete error:", deleteError);
  } else {
    // Check if it was really deleted (sometimes RLS says success but deletes 0 rows)
    const { data: checkPost } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("id", post.id)
      .single();

    if (checkPost) {
      console.log(
        "Post still exists after delete attempt. This usually happens when RLS allows the operation but no policy covers the specific action, or it fails silently.",
      );
    } else {
      console.log("Post deleted successfully.");
    }
  }
}

testDelete();
