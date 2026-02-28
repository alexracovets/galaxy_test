"use server";

interface SearchHeroProps {
    q: string | string[] | undefined;
}

export const search_hero = async ({ q }: SearchHeroProps) => {
    const query = Array.isArray(q) ? q[0] : (q || "").trim();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });
    
    const rawText = await response.text();
    const data = rawText ? JSON.parse(rawText) : {};

    return {
        contracts: data.result,
        categories: [],
        title: "Search Results",
        description: "Search results for the query: " + query,
    };

};