"use server";

export const get_contracts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contracts`, {
        method: "POST",
    });
    const data = await response.json();
    return data;
};