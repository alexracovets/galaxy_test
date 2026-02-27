"use client";

import { AtomLink, AtomWrapper } from "@atoms";

export const AuthUser = () => {
    return (
        <AtomWrapper>
            <AtomLink variant="auth_login" href="#login">
                Login
            </AtomLink>
            <AtomLink variant="auth_signup" href="#signup">
                Sign Up
            </AtomLink>
        </AtomWrapper>
    );
};