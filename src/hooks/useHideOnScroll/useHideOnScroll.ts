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

    useEffect(() => {
        const updateHeight = () => {
            headerHeightRef.current = headerRef.current?.offsetHeight ?? 0;
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useMotionValueEvent(scrollY, "change", (value: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const isScrollingDown = value > previous;
        const threshold = Math.max(headerHeightRef.current, offset);
        const passedHeader = value > threshold;

        if (!passedHeader) {
            hasHiddenOnceRef.current = false;
            setIsHidden(false);
            setIsActive(false);
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
