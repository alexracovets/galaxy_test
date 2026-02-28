"use client";


type SearchParams = {
    q?: string | string[];
};

export type SearchPageType = {
    searchParams: Promise<SearchParams>;
};