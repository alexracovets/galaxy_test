import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

type UseHideOnScrollOptions = {
    offset?: number;
};

const useHideOnScroll = ({ offset = 0 }: UseHideOnScrollOptions = {}) => {
    const { scrollY } = useScroll();
    const headerRef = useRef<HTMLElement>(null);
    const [isHidden, setIsHidden] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const headerHeightRef = useRef(0);
    const hasHiddenOnceRef = useRef(false);
    const ignoreHideUntilRef = useRef(0);

    useEffect(() => {
        const updateHeight = () => {
            headerHeightRef.current = headerRef.current?.offsetHeight ?? 0;
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            ignoreHideUntilRef.current = performance.now() + 800;
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useMotionValueEvent(scrollY, "change", (value: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const isScrollingDown = value > previous;
        const threshold = Math.max(headerHeightRef.current, offset);
        const passedHeader = value > threshold;
        const shouldIgnoreHide = performance.now() < ignoreHideUntilRef.current;

        if (!passedHeader) {
            hasHiddenOnceRef.current = false;
            setIsHidden(false);
            setIsActive(false);
            return;
        }

        if (shouldIgnoreHide) {
            setIsHidden(false);
            setIsActive(true);
            return;
        }

        if (isScrollingDown) {
            hasHiddenOnceRef.current = true;
            setIsHidden(true);
            setIsActive(false);
            return;
        }

        setIsHidden(false);
        setIsActive(hasHiddenOnceRef.current);
    });

    return { headerRef, isHidden, isActive };
};

export { useHideOnScroll };
