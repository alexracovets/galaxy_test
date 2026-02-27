"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

import { AtomImage, AtomText, AtomWrapper, Button, Container } from "@atoms";

import { cn } from "@utils";
import type { ContractsPayload } from "@types";

type ContractPostsProps = {
    data: ContractsPayload;
};

const toneClasses: Record<string, string> = {
    primary: "border-brand text-brand",
    success: "border-emerald-500 text-emerald-600",
    info: "border-sky-500 text-sky-600",
};

export const ContractPosts = ({ data }: ContractPostsProps) => {
    const [activeCategory, setActiveCategory] = useState(
        data.categories[0]?.value || data.categories[0]?.label || "I.T Contractor",
    );

    const categoryValueByLabel = useMemo(() => {
        return new Map(
            data.categories.map((category) => [category.label, category.value]),
        );
    }, [data.categories]);

    const filteredContracts = useMemo(() => {
        if (!activeCategory) {
            return data.contracts;
        }

        return data.contracts.filter(
            (contract) =>
                (categoryValueByLabel.get(contract.category) ||
                    contract.category) === activeCategory,
        );
    }, [activeCategory, data.contracts, categoryValueByLabel]);

    return (
        <section id="latest-contracts">
            <Container>
                <AtomWrapper variant="contracts_posts">
                    <AtomWrapper variant="section_info" className="gap-y-[12px]">
                        <AtomText variant="h2" asChild>
                            <h2>{data.title}</h2>
                        </AtomText>
                        <AtomText variant="section_description">
                            {data.description}
                        </AtomText>
                    </AtomWrapper>
                    <AtomWrapper variant="contracts_posts_categories">
                        <AtomWrapper variant="contracts_posts_categories_header">
                            {data.categories.map((category, idx) => {
                                const isActive = category.value === activeCategory;
                                return (
                                    <Button
                                        key={idx}
                                        variant="contracts_posts_category"
                                        size="icon"
                                        data-active={isActive}
                                        type="button"
                                        onClick={() => setActiveCategory(category.value)}
                                    >
                                        <AtomWrapper variant="contracts_posts_category_image" />
                                        {category.label}
                                    </Button>
                                )
                            })}
                        </AtomWrapper>
                        <AtomWrapper variant="contracts_posts_categories_content">
                            {filteredContracts.map((contract) => (
                                <AtomWrapper variant="contracts_posts_content" key={contract.id}>
                                    <AtomWrapper variant="contracts_posts_content_inner">
                                        <AtomWrapper>
                                            <AtomImage
                                                src={contract.image}
                                                alt={contract.title}
                                                variant="contracts_posts"
                                                intrinsic
                                            />
                                        </AtomWrapper>
                                        <AtomText variant="contracts_posts_title">
                                            Contract: {contract.title}
                                        </AtomText>
                                        <AtomText variant="contracts_posts_price">
                                            {`${contract.amount} / ${contract.amountPeriod}`}
                                        </AtomText>
                                        <AtomWrapper variant="contracts_posts_duration">
                                            <Clock className="w-[17px] h-[17px] text-base-gray shrink-[2px]" />
                                            <span>{contract.duration}</span>
                                        </AtomWrapper>
                                        <AtomWrapper variant="contracts_posts_tags">
                                            {contract.tags.map((tag) => (
                                                <AtomWrapper variant="contracts_posts_tag" key={tag.label} asChild className={cn(
                                                    toneClasses[tag.tone] ||
                                                    toneClasses.primary,
                                                )}>
                                                    <span>{tag.label}</span>
                                                </AtomWrapper>
                                            ))}
                                        </AtomWrapper>
                                        <AtomText variant="contracts_posts_summary">
                                            {contract.summary}
                                        </AtomText>
                                    </AtomWrapper>
                                    <AtomWrapper variant="contracts_posts_card_arrow">
                                        <div className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-base-white rounded-tl-[30px]">
                                            <div className="flex items-end justify-end relative w-full h-full">
                                                <div className="absolute bottom-0 left-[-60px] w-[60px] h-[60px] bg-base-white">
                                                    <div className="w-[60px] h-[60px] bg-bage rounded-br-[30px]" />
                                                </div>
                                                <div className="absolute top-[-60px] right-0 w-[60px] h-[60px] bg-base-white">
                                                    <div className="w-[60px] h-[60px] bg-bage rounded-br-[30px]" />
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="card_arrow"
                                                    size="card_arrow"
                                                >
                                                    <ArrowRight className="w-[24px] h-[24px] text-base-white" />
                                                </Button>
                                            </div>
                                        </div>
                                    </AtomWrapper>
                                </AtomWrapper>
                            ))}
                        </AtomWrapper>
                    </AtomWrapper>
                </AtomWrapper>
            </Container>
        </section>
    );
};