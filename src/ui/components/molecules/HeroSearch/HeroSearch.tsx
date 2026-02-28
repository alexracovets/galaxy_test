"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { AtomInput, AtomText, AtomWrapper, Button } from "@atoms";

type HeroSearchProps = {
    initialValue?: string;
};

const searchDescription = "480.000+ Available Contracts Listed";

export const HeroSearch = ({ initialValue = "" }: HeroSearchProps) => {
    const [search, setSearch] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        setSearch(initialValue);
    }, [initialValue]);

    const handleSearch = () => {
        const trimmed = search.trim();
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    };

    return (
        <AtomWrapper variant="hero_search_content">
            <AtomWrapper
                variant="hero_search"
                onClick={(event) => {
                    const target = event.target as HTMLElement
                    if (target.closest('[data-slot="button"]')) {
                        return
                    }
                    inputRef.current?.focus()
                }}
            >
                <Search className="cursor-pointer h-[20px] w-[20px] shrink-[2px] text-base-white ml-[26px]" aria-hidden="true" />
                <AtomInput
                    id="hero-search"
                    ref={inputRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    type="text"
                    placeholder="Search contracts..."
                    variant="hero"
                />
                <Button type="button" onClick={handleSearch}>
                    Search
                </Button>
            </AtomWrapper>
            <AtomText variant="hero_search_description">
                {searchDescription}
            </AtomText>
        </AtomWrapper>
    );
};