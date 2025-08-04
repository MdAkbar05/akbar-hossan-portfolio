import connectDB from "@/lib/connectDB";
import { Project } from "@/lib/model/projectSchema";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

connectDB();
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  // Ensure lan is stored as an array
  if (typeof body.lan === "string") {
    body.lan = body.lan.split(",").map((item) => item.trim());
  }
  // find by id
  const project = await Project.findById(id);

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  // delete image from Cloudinary
  if (project.img) {
    const result = await cloudinary.v2.uploader.destroy(project.img);
  }

  const updatedProject = await Project.findByIdAndUpdate(id, body, {
    new: true,
  });
  console.log(updatedProject);
  return NextResponse.json({ message: "Project Updated.", updatedProject });
}

export async function GET(request, { params }) {
  const { id } = await params;

  const project = await Project.findById(id);
  return NextResponse.json(
    { message: "Get Single Project", project },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    const { img } = project;
    if (img) {
      // Delete image from Cloudinary
      const result = await cloudinary.v2.uploader.destroy(img);
      console.log(result);
    }
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Server Error:" + error.message },
      { status: 500 }
    );
  }
}
