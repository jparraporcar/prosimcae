import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    companyName,
    companyCountry,
    contactName,
    contactEmail,
    complexity,
    estDeadline,
    explanation,
  } = await request.json();

  const { sql } = await import("@vercel/postgres");

  try {
    await sql`
      INSERT INTO contacts_custom (
        companyName,
        companyCountry,
        contactName,
        contactEmail,
        complexity,
        estDeadline,
        explanation
      ) VALUES (
        ${companyName},
        ${companyCountry},
        ${contactName},
        ${contactEmail},
        ${complexity},
        ${estDeadline},
        ${explanation}
      );
    `;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Contact successfully added!" },
    { status: 201 }
  );
}
