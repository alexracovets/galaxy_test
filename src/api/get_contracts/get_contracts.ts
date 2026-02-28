"use server";

import { contractsData } from "@data";

export const get_contracts = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
        return contractsData;
    }

    try {
        const response = await fetch(`${baseUrl}/api/contracts`, {
            method: "POST",
        });
        return await response.json();
    } catch {
        return contractsData;
    }
};