"use client";

import Marquee from 'react-fast-marquee'

import { AtomImage, AtomText, AtomWrapper, Container } from "@atoms";

export const TrustedCompany = () => {
    const title = "Trusted by top data-driven teams";
    const list = [
        "/marquee/marquee_0.svg",
        "/marquee/marquee_1.svg",
        "/marquee/marquee_2.svg",
        "/marquee/marquee_3.svg",
        "/marquee/marquee_4.svg",
        "/marquee/marquee_5.svg",
        "/marquee/marquee_6.svg",
    ];

    return (

        <AtomWrapper variant="trusted_company" asChild>
            <section>
                <Container>
                    <AtomText variant="h3" asChild>
                        <h3>{title}</h3>
                    </AtomText>
                </Container>
                <Marquee
                    autoFill
                    className="overflow-hidden"
                    gradient={true}
                    gradientWidth={150}
                >
                    <AtomWrapper variant="trusted_company_list">
                        {list.map((item, index) => (
                            <AtomImage
                                key={index}
                                src={item}
                                alt={`Company ${index + 1}`}
                                variant="trusted_company_list_item"
                                intrinsic
                            />
                        ))}
                    </AtomWrapper>
                </Marquee>
            </section>
        </AtomWrapper>
    );
};