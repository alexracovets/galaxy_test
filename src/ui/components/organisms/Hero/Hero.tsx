"use client";

import { AtomImage, AtomWrapper } from "@atoms";
import { HeroInfo, HeroSearch } from "@molecules";

export const Hero = () => {
    const heroImage = "/hero/background.png";

    return (
        <AtomWrapper variant="hero">
            <AtomImage src={heroImage} alt="Hero" variant="hero" />
            <HeroInfo />
            <HeroSearch />
        </AtomWrapper>
    );
};