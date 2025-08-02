export default async function postProject(data) {
  const result = await fetch("http://localhost:3000/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!result.ok) {
    throw new Error("errro with get posts");
  }

  return result.json();
}
