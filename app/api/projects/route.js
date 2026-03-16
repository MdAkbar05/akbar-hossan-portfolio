import connectDB from "@/lib/connectDB";
import { Project } from "@/lib/model/projectSchema";
import { NextResponse } from "next/server";

connectDB();
export async function POST(request) {
  try {
    const result = await request.json();
    if (!result) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    // Ensure lan is stored as an array
    if (typeof result.lan === "string") {
      result.lan = result.lan.split(",").map((item) => item.trim());
    }

    const newProject = await Project.create(result); // Save the project

    return NextResponse.json({ message: "Success", data: newProject });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sortQuery = searchParams.get("query");

    let filter = {}; // Default filter (fetch all)
    let sortOption = { createdAt: -1 }; // Default sorting

    // Define sorting and filtering logic
    if (sortQuery === "A-Z") {
      sortOption = { title: 1 }; // Ascending order by title
    } else if (sortQuery === "Recents") {
      sortOption = { createdAt: -1 }; // Most recent first
    } else if (sortQuery === "Graphics") {
      filter = { lan: { $in: ["Graphics"] } }; // Filter projects where "Graphics" is in the lan array
    } else if (sortQuery === "Web") {
      filter = {
        lan: {
          $in: [
            "JavaScript" ||
              "JS" ||
              "ReactJS" ||
              "React.js" ||
              "Tailwind" ||
              "Next.js" ||
              "Node.js" ||
              "HTML" ||
              "CSS",
          ],
        },
      }; // Filter projects where "Web" is in the lan array
    }

    // Fetch projects with filtering and sorting
    const projects = await Project.find(filter).sort(sortOption);

    return NextResponse.json({ data: projects }, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Error fetching projects", error: error.message },
      { status: 500 },
    );
  }
}

// const To_Be_Developer = () => {
//   console.log("🚀 Wake up. Code. Repeat.");
//   console.log("💡 Think logically, solve creatively.");
//   console.log("📚 Keep learning, always.");
//   console.log("🧠 Bugs are just misunderstood features.");
//   console.log("🔥 Passion over perfection.");
//   console.log("💻 Code with purpose, not just syntax.");
//   console.log("🌱 Grow through what you go through.");
//   console.log("🛠️ Build projects, not excuses.");
//   console.log("❤️ Love the journey, not just the job.");
//   console.log("🌍 One line of code can change the world.");
// }
