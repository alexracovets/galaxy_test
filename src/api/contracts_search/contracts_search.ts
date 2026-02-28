"use server";

import { contractsData } from "@data";

interface SearchHeroProps {
    q: string | string[] | undefined;
}

export const contracts_search = async ({ q }: SearchHeroProps) => {
    const query = Array.isArray(q) ? q[0] : (q || "").trim();

    if (!query) {
        return {
            contracts: contractsData.contracts,
            categories: [],
            title: "Search Results",
            description: "Search results for the query: ",
        };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const rawText = await response.text();
    const data = rawText ? JSON.parse(rawText) : {};
    const result = Array.isArray(data.result) ? data.result : [];

    return {
        contracts: result,
        categories: [],
        title: "Search Results",
        description: "Search results for the query: " + query,
    };

};