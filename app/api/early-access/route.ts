import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import EarlyAccess from "@/models/EarlyAccess";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email, and phone are required" }, { status: 400 });
    }

    await dbConnect();

    const existing = await EarlyAccess.findOne({ email: String(email).toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "You are already on the early access list" }, { status: 409 });
    }

    const entry = await EarlyAccess.create({ name, email, phone });
    return NextResponse.json({ ok: true, id: entry._id }, { status: 201 });
  } catch (err: any) {
    console.error("Early access POST error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
