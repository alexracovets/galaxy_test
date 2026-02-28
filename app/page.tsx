
import { HomePage } from "@pages";

import { get_contracts } from "@api";

export default async function Home() {
  const contractsData = await get_contracts();

  return (
    <HomePage contractsData={contractsData} />
  );
}
