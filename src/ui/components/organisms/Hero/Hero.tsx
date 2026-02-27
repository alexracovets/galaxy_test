"use client";

import { AtomImage, AtomWrapper } from "@atoms";

export const Hero = () => {
    const heroImage = "/hero/background.png";

    return (
        <AtomWrapper variant="hero">
            <AtomImage src={heroImage} alt="Hero" variant="hero" />
            <h2>Run Your Business</h2>
        </AtomWrapper>
    );
};