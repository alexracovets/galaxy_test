
import { headers } from "next/headers";

import { HomePage } from "@pages";

import type { ContractsPayload } from "@types";

const getContractsData = async (): Promise<ContractsPayload> => {
  const headersList = await headers();
  const host = headersList.get("host");
  const baseUrl = host
    ? `${headersList.get("x-forwarded-proto") || "http"}://${host}`
    : "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/contracts`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to load contracts data");
  }

  return response.json();
};

export default async function Home() {
  const contractsData = await getContractsData();

  return (
    <HomePage contractsData={contractsData} />
  );
}
