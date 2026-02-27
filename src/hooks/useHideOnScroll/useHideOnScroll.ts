import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

type UseHideOnScrollOptions = {
    offset?: number;
};

const useHideOnScroll = ({ offset = 0 }: UseHideOnScrollOptions = {}) => {
    const { scrollY } = useScroll();
    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [hasHiddenOnce, setHasHiddenOnce] = useState(false);

    useEffect(() => {
        const updateHeight = () => {
            setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useMotionValueEvent(scrollY, "change", (value: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const isScrollingDown = value > previous;
        const threshold = Math.max(headerHeight, offset);
        const passedHeader = value > threshold;

        if (!passedHeader) {
            setHasHiddenOnce(false);
            setIsHidden(false);
            return;
        }

        if (isScrollingDown) {
            setHasHiddenOnce(true);
            setIsHidden(true);
            return;
        }

        setIsHidden(false);
    });

    const isActive = hasHiddenOnce && !isHidden;

    return { headerRef, isHidden, isActive };
};

export { useHideOnScroll };
