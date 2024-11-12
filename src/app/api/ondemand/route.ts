import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    companyName,
    companyCountry,
    contactName,
    contactEmail,
    defProjDuration,
    expectProjDurationHours,
    explanation,
  } = await request.json();

  const projDuration =
    expectProjDurationHours !== undefined ? expectProjDurationHours : null;

  try {
    await sql`
      INSERT INTO contacts_ondemand (
        companyName, 
        companyCountry, 
        contactName, 
        contactEmail, 
        defProjDuration, 
        expectProjDurationHours, 
        explanation
      )
      VALUES (
        ${companyName}, 
        ${companyCountry}, 
        ${contactName}, 
        ${contactEmail}, 
        ${defProjDuration}, 
        ${projDuration}, 
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
