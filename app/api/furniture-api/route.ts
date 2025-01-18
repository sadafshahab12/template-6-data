import { NextResponse } from "next/server";
import { furnitureAPI } from "./data";

// Route handler
export async function GET() {
  try {
    if (!furnitureAPI) {
      throw new Error("Books Data is unavailable");
    }
    return NextResponse.json(furnitureAPI, { status: 200 });
  } catch (error) {
    console.log("error in fetching books", error);
    return NextResponse.json(
      { message: "An error occurred while fetching books." },
      { status: 500 }
    );
  }
}


git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sadafshahab12/template-6-data.git
git push -u origin main