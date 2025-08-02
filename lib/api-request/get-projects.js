export default async function getProjects(query) {
  try {
    console.log(query);
    const url = query
      ? `http://localhost:3000/api/projects?query=${query}`
      : "http://localhost:3000/api/projects";

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch projects");

    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array to prevent breaking UI
  }
}
