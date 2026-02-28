export type ContractTagType = {
    label: string;
    tone: "primary" | "success" | "info";
};

export type ContractItemType = {
    id: string;
    company: string;
    companyInitials: string;
    title: string;
    amount: string;
    amountPeriod: string;
    duration: string;
    category: string;
    tags: ContractTagType[];
    summary: string;
    verified: boolean;
    ctaLabel: string;
    image: string;
};

export type ContractCategoryType = {
    label: string;
    value: string;
    image?: string;
};

export type ContractsPayloadType = {
    title: string;
    description: string;
    categories: ContractCategoryType[];
    contracts: ContractItemType[];
};
