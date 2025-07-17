export async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
