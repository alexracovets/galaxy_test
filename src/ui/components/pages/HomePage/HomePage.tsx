import { ContractPosts, TrustedCompany } from "@organisms";
import type { ContractsPayload } from "@types";

type HomePageProps = {
    contractsData: ContractsPayload;
};

export const HomePage = ({ contractsData }: HomePageProps) => {
    return (
        <>
            <TrustedCompany />
            <ContractPosts data={contractsData} />
        </>
    );
};