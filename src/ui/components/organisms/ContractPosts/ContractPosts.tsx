"use client";

import { AtomText, AtomWrapper, Container } from "@atoms";

import { СontractsPostItem } from "./СontractsPostItem";
import { ContractCategory } from "./ContractCategory";

import type { ContractsPayloadType } from "@types";
import { useContractPosts } from "@hooks";

type ContractPostsProps = {
    data: ContractsPayloadType;
    showCategories?: boolean;
    showDescription?: boolean;
};

export const ContractPosts = ({ data, showCategories = true, showDescription = true }: ContractPostsProps) => {
    const { activeCategory, setActiveCategory, filteredContracts } = useContractPosts({
        data,
        showCategories,
    });

    return (
        <section id="latest-contracts">
            <Container>
                <AtomWrapper variant="contracts_posts">
                    <AtomWrapper variant="section_info" className="gap-y-[12px]">
                        <AtomText variant="h2" asChild>
                            <h2>{data.title}</h2>
                        </AtomText>
                        {showDescription && (
                            <AtomText variant="section_description">
                                {data.description}
                            </AtomText>
                        )}
                    </AtomWrapper>
                    <AtomWrapper variant="contracts_posts_categories">
                        {showCategories && (
                            <AtomWrapper variant="contracts_posts_categories_header">
                                {data.categories.map((category, idx) => {
                                    return (
                                        <ContractCategory
                                            key={idx}
                                            activeCategory={activeCategory}
                                            setActiveCategory={setActiveCategory}
                                            category={category}
                                        />
                                    );
                                })}
                            </AtomWrapper>
                        )}
                        <AtomWrapper variant="contracts_posts_categories_content">
                            {filteredContracts.map((contract) => (
                                <СontractsPostItem key={contract.id} contract={contract} />
                            ))}
                        </AtomWrapper>
                    </AtomWrapper>
                </AtomWrapper>
            </Container>
        </section>
    );
};