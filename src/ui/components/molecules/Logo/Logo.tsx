"use client";

import { AtomLink, AtomText } from "@atoms";

export const Logo = () => {
    return (
        <AtomLink href="/" variant="logo">
            <span className="brand-circle absolute top-[-5px] left-[-9px] z-[-1]" />
            TEST TASK
        </AtomLink>
    );
};