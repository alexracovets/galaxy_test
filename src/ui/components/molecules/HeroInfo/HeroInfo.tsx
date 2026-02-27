"use client";

import { AtomText, AtomWrapper } from "@atoms";

export const HeroInfo = () => {
    const heroTitle = "Run Your Business";
    const heroDescription = "Find better suppliers. Secure real contracts. Build lasting partnerships.";

    return (
        <AtomWrapper variant="hero_info">
            <AtomText variant="hero_title" asChild>
                <h2>{heroTitle}</h2>
            </AtomText>
            <AtomText variant="hero_description">
                {heroDescription}
            </AtomText>
        </AtomWrapper>
    );
};