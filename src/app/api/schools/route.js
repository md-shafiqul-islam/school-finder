"use server";

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const [schools] = await db.query("SELECT * FROM schools");
    await db.end();
    return NextResponse.json({ schools });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch schools" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, address, city, state, contact, image, email_id } =
      await request.json();

    if (!name || !address || !city || !contact || !email_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    const sql = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await db.query(sql, [
      name,
      address,
      city,
      state || null,
      contact,
      image || null,
      email_id,
    ]);

    await db.end();

    revalidatePath("/schools");

    return NextResponse.json(
      {
        message: "School added successfully",
        id: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting school:", error);
    return NextResponse.json(
      { error: "Failed to add school", details: error.message },
      { status: 500 }
    );
  }
}
