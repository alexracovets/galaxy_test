"use client";

import { AtomText, AtomWrapper, AtomImage, Button } from "@atoms";
import { ArrowRight, Clock } from "lucide-react";

import type { ContractItemType } from "@types";
import { cn } from "@utils";

const toneClasses: Record<string, string> = {
    primary: "border-brand text-brand",
    success: "border-emerald-500 text-emerald-600",
    info: "border-sky-500 text-sky-600",
};

export const СontractsPostItem = ({ contract }: { contract: ContractItemType }) => {
    return (
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
                        <AtomWrapper
                            variant="contracts_posts_tag"
                            key={tag.label}
                            asChild
                            className={
                                cn(
                                    toneClasses[tag.tone] ||
                                    toneClasses.primary,
                                )
                            }
                        >
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
    );
};