export default async function deleteProject(id) {
  const result = await fetch(`http://localhost:3000/api/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    throw new Error("errro with deleting request");
  }

  return result.json();
}
