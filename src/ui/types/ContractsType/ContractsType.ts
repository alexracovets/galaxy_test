export type ContractTag = {
    label: string;
    tone: "primary" | "success" | "info";
};

export type ContractItem = {
    id: string;
    company: string;
    companyInitials: string;
    title: string;
    amount: string;
    amountPeriod: string;
    duration: string;
    category: string;
    tags: ContractTag[];
    summary: string;
    verified: boolean;
    ctaLabel: string;
    image: string;
};

export type ContractCategory = {
    label: string;
    value: string;
    image?: string;
};

export type ContractsPayload = {
    title: string;
    description: string;
    categories: ContractCategory[];
    contracts: ContractItem[];
};
