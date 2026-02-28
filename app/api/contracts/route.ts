import { NextResponse } from "next/server";

import { contractsData } from "@data";

export async function POST() {
    return NextResponse.json(contractsData);
}
