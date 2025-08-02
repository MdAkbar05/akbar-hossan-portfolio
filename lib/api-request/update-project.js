export default async function updateProject(id, project) {
  const result = await fetch(`http://localhost:3000/api/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    throw new Error("errro with update project request");
  }

  return result.json();
}
