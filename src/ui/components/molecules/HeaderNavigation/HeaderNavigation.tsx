"use client";

import { AtomLink, AtomWrapper } from "@atoms";

import { HeaderNavigationType } from "@types";

export const HeaderNavigation = ({ navigation }: HeaderNavigationType) => {
    const activeNav = "#home";

    return (
        <nav aria-label="Header navigation">
            <AtomWrapper variant="header_navigation" asChild>
                <ul>
                    {navigation.map((item, idx) => (
                        <li key={idx}>
                            <AtomLink
                                variant="header_navigation"
                                data-active={item.href === activeNav}
                                href={item.href}
                            >
                                {item.label}
                            </AtomLink>
                        </li>
                    ))}
                </ul>
            </AtomWrapper>
        </nav>
    );
};