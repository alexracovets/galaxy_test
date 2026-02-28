import { ContractPosts } from "@organisms";
import type { ContractsPayloadType, SearchPageType } from "@types";

import { search_hero } from "@api";

export default async function SearchPage({ searchParams }: SearchPageType) {
    const { q } = await searchParams;

    const data = await search_hero({ q });

    return (
        <ContractPosts data={data as ContractsPayloadType} showCategories={false} showDescription={false} />
    );
}
