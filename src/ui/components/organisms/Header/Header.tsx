"use client";

import { motion } from "framer-motion";

import { AtomWrapper, Container } from "@atoms";
import { AuthUser, HeaderNavigation, Logo } from "@molecules";

import { useHideOnScroll } from "@hooks";

const navigation = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "How It Works",
        href: "#how-it-works",
    },
    {
        label: "Latest Contracts Post",
        href: "#latest-contracts",
    },
];

export const Header = () => {
    const { headerRef, isHidden } = useHideOnScroll({ offset: 50 });

    return (
        <motion.header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 w-full py-[21px]"
            initial={false}
            animate={{ y: isHidden ? "-100%" : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Container>
                <AtomWrapper variant="header_border">
                    <AtomWrapper variant="header_content">
                        <Logo />
                        <HeaderNavigation navigation={navigation} />
                        <AuthUser />
                    </AtomWrapper>
                </AtomWrapper>
            </Container>
        </motion.header>
    );
};