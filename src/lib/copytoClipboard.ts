export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Copy failed:", err);
  }
}
