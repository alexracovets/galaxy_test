"use client";

import { AtomText, AtomWrapper, Container } from "@atoms";

export const ContractPosts = () => {
    const title = "Latest Contracts Post";
    const description = "Search and connect with the right companies faster";

    return (
        <section>
            <Container>
                <AtomWrapper variant="section_info">
                    <AtomText variant="h2" asChild>
                        <h2>{title}</h2>
                    </AtomText>
                    <AtomText variant="section_description">
                        {description}
                    </AtomText>
                </AtomWrapper>
            </Container>
        </section>
    );
};