import { ContractPosts, TrustedCompany } from "@organisms";
import type { ContractsPayloadType } from "@types";

type HomePageProps = {
    contractsData: ContractsPayloadType;
};

export const HomePage = ({ contractsData }: HomePageProps) => {
    return (
        <>
            <TrustedCompany />
            <ContractPosts data={contractsData} />
        </>
    );
};