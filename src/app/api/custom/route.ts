import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //   const {
  //     company,
  //     complexity,
  //     contactEmail,
  //     contactName,
  //     country,
  //     estDeadline,
  //     explanation,
  //   } = await request.json();

  const data = await request.json();
  console.log(data);
  //   try {
  //     await sql`
  //           INSERT INTO contacts (company, complexity, contactEmail, contactName, country, estDeadline, explanation)
  //           VALUES (${company}, ${complexity}, ${contactEmail}, ${contactName}, ${country}, ${estDeadline}, ${explanation});
  //         `;
  //   } catch (error: any) {
  //     return NextResponse.json({ error: error.message }, { status: 500 });
  //   }

  return NextResponse.json(
    { message: "Contact successfully added!" },
    { status: 201 }
  );
  //   console.log(request);
}
