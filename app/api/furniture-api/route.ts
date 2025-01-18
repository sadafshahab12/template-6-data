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
