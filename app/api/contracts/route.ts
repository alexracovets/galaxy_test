import { NextResponse } from "next/server";

import { contractsData } from "@data";

export async function GET() {
    return NextResponse.json(contractsData);
}
