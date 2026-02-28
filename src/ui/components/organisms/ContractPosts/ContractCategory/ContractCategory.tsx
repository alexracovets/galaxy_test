"use client";

import { useState } from "react";

import { Button, AtomWrapper } from "@atoms";
import { InlineSVG } from "@molecules";

import type { ContractCategoryType } from "@types";

interface ContractCategoryProps {
    activeCategory: string;
    setActiveCategory: (value: string) => void;
    category: ContractCategoryType;
}

export const ContractCategory = ({ activeCategory, setActiveCategory, category }: ContractCategoryProps) => {
    const isActive = category.value === activeCategory;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            variant="contracts_posts_category"
            size="icon"
            data-active={isActive}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AtomWrapper variant="contracts_posts_category_image" data-active={isActive || isHovered}>
                <InlineSVG src={category.image || ""} />
            </AtomWrapper>
            {category.label}
        </Button>
    );
};