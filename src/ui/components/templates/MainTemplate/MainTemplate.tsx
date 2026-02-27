"use client";

import { Hero, Header } from "@organisms";

import type { ChildrenType } from "@types";

export const MainTemplate = ({ children }: ChildrenType) => {
    return (
        <div className="w-full flex flex-col gap-y-[50px]">
            <Header />
            <Hero />
            {children}
        </div>
    );
};