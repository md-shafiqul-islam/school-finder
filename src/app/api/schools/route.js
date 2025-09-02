"use server";

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = connectDB();
    const [rows] = await db.query("SELECT * FROM schools");
    return NextResponse.json({ schools: rows });
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
    const body = await request.json();
    const { name, address, city, state, contact, image, email_id } = body;

    if (!name || !address || !city || !contact || !email_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = connectDB();

    const [result] = await db.query(
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state || null, contact, image || null, email_id]
    );

    return NextResponse.json({ id: result.insertId, ...body }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create school", details: error.message },
      { status: 500 }
    );
  }
}
