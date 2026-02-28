import { useMemo, useState } from "react";

import type { ContractsPayloadType } from "@types";

type UseContractPostsParams = {
    data: ContractsPayloadType;
    showCategories: boolean;
};

export const useContractPosts = ({ data, showCategories }: UseContractPostsParams) => {
    const [activeCategory, setActiveCategory] = useState(() => {
        if (!showCategories) {
            return "";
        }
        return data.categories[0]?.value || data.categories[0]?.label || "I.T Contractor";
    });

    const categoryValueByLabel = useMemo(() => {
        return new Map(
            data.categories.map((category) => [category.label, category.value]),
        );
    }, [data.categories]);

    const filteredContracts = useMemo(() => {
        if (!showCategories || !activeCategory) {
            return data.contracts;
        }

        return data.contracts.filter(
            (contract) =>
                (categoryValueByLabel.get(contract.category) || contract.category) ===
                activeCategory,
        );
    }, [activeCategory, data.contracts, categoryValueByLabel, showCategories]);

    return {
        activeCategory,
        setActiveCategory,
        filteredContracts,
    };
};
