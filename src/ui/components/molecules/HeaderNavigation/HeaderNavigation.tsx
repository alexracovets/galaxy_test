"use client";

import { AtomLink, AtomWrapper } from "@atoms";

import { HeaderNavigationType } from "@types";
import { useHeaderNavigation } from "@hooks";

export const HeaderNavigation = ({ navigation }: HeaderNavigationType) => {
    const { activeNavigation, handleAnchorClick } = useHeaderNavigation();
    
    return (
        <nav aria-label="Header navigation">
            <AtomWrapper variant="header_navigation" asChild>
                <ul>
                    {navigation.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <AtomLink
                                    variant="header_navigation"
                                    data-active={activeNavigation === item.hash}
                                    href={`${item.href}#${item.hash}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleAnchorClick(item.href, item.hash);
                                    }}
                                >
                                    {item.label}
                                </AtomLink>
                            </li>
                        );
                    })}
                </ul>
            </AtomWrapper>
        </nav>
    );
};