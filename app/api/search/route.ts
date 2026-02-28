import { NextResponse } from "next/server";
import OpenAI from "openai";

import { buildSearchPrompt } from "@prompts";
import { contractsData } from "@data";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const body = await request.json();
    const { query } = body;

    if (query) {
        const prompt = buildSearchPrompt(query, contractsData.contracts);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });
        const rawResult = completion.choices?.[0]?.message?.content ?? "[]";
        const cleaned = rawResult
            .replace(/^\s*```json\s*/i, "")
            .replace(/\s*```\s*$/i, "")
            .trim();
        let result: unknown = [];
        result = JSON.parse(cleaned);

        return NextResponse.json({ query, result });
    }
    return NextResponse.json(
        { error: "Missing query." },
        { status: 400 }
    );
}
