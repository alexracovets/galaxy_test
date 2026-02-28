import { ContractPosts } from "@organisms";
import type { ContractsPayloadType, SearchPageType } from "@types";

import { contracts_search } from "@api";

export default async function SearchPage({ searchParams }: SearchPageType) {
    const { q } = await searchParams;

    const data = await contracts_search({ q });

    return (
        <ContractPosts data={data as ContractsPayloadType} showCategories={false} showDescription={false} />
    );
}
