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
        const passedHeader = value > headerHeight + offset;

        if (!passedHeader) {
            setIsHidden(false);
            return;
        }

        setIsHidden(isScrollingDown);
    });

    return { headerRef, isHidden };
};

export { useHideOnScroll };
