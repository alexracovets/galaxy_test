"use server";

import { contractsData } from "@data";

export const contracts_get = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
        return contractsData;
    }

    try {
        const response = await fetch(`${baseUrl}/api/contracts`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch {
        return contractsData;
    }
};