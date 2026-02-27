"use client";

import { Hero } from "@organisms";

import type { ChildrenType } from "@types";

export const MainTemplate = ({ children }: ChildrenType) => {
    return (
        <>
            <Hero />
            {children}
        </>
    );
};