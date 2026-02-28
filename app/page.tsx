
import { HomePage } from "@pages";

import { contracts_get } from "@api";

export default async function Home() {
  const contractsData = await contracts_get();

  return (
    <HomePage contractsData={contractsData} />
  );
}
