'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'

import { AtomLinkType } from '@types'
import { cn } from '@utils'

const variantAtomLink = cva('outline-none!', {
    variants: {
        variant: {
            default: '',
            logo: "block relative z-0 text-primary text-[30px] leading-[30px] tracking-[-0.9px] font-[700] bg-transparent",
            header_navigation: cn(
                "text-[15px] text-foreground font-[500] px-[16px] py-[8px]",
                "hover:text-foreground-active data-[active=true]:text-foreground-active",
                "transition-colors duration-300 ease-in-out",
            ),
            auth_login: cn(
                "text-[15px] text-primary font-[500] px-[16px] py-[8px]",
                "hover:text-foreground-active data-[active=true]:text-foreground-active",
                "transition-colors duration-300 ease-in-out",
            ),
            auth_signup: cn(
                "text-[15px] text-foreground-active font-[500] px-[18px] py-[8px] rounded-full border border-[1px] border-foreground-active",
                "hover:bg-base-white data-[active=true]:bg-base-white",
                "transition-background-color duration-300 ease-in-out",
            ),
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

const AtomLink = ({
    variant,
    className,
    children,
    href,
    style,
    target,
    onMouseEnter,
    onMouseLeave,
    ...props
}: AtomLinkType) => {
    return (
        <Link
            href={href}
            className={cn(variantAtomLink({ variant, className }))}
            style={style}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
        >
            {children}
        </Link>
    )
};

export { AtomLink, variantAtomLink };
