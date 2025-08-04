export default async function postProject(data) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!result.ok) {
    throw new Error("errro with get posts");
  }

  return result.json();
}
