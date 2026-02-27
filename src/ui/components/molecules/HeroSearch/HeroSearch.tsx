"use client";

import { useRef, useState } from "react";
import { Search } from "lucide-react";

import { AtomInput, AtomText, AtomWrapper, Button } from "@atoms";

export const HeroSearch = () => {
    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const searchDescription = "480.000+ Available Contracts Listed";

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
                    type="text"
                    placeholder="Search contracts..."
                    variant="hero"
                />
                <Button>Search</Button>
            </AtomWrapper>
            <AtomText variant="hero_search_description">
                {searchDescription}
            </AtomText>
        </AtomWrapper>
    );
};