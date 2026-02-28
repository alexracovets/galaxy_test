"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useActiveNavigation } from "@store";

const useHeaderNavigation = () => {
    const { activeNavigation, setActiveNavigation } = useActiveNavigation();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const syncActiveFromHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (!hash) {
                setActiveNavigation("");
                return;
            }

            const hasSection = document.getElementById(hash) !== null;
            setActiveNavigation(hasSection ? hash : "");
        };

        syncActiveFromHash();
        window.addEventListener("hashchange", syncActiveFromHash);

        return () => {
            window.removeEventListener("hashchange", syncActiveFromHash);
        };
    }, [pathname, setActiveNavigation]);

    const handleAnchorClick = (href: string, hash: string) => {
        const target = document.getElementById(hash);
        const targetUrl = `${href}#${hash}`;

        if (pathname === href && target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", targetUrl);
            setActiveNavigation(hash);
            return;
        }

        setActiveNavigation(hash);
        router.push(targetUrl);
    };

    return { activeNavigation, handleAnchorClick };
};

export { useHeaderNavigation };
