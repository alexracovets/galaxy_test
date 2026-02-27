'use client'

import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import type { AtomWrapperType } from "@types";
import { cn } from '@utils'

const variantAtomWrapper = cva('', {
    variants: {
        variant: {
            default: "w-full",
            container: "px-[40px] mx-auto w-full",
            hero: "w-full h-screen relative flex flex-col gap-y-[46px] justify-center items-center",
            hero_info: "flex flex-col gap-y-[11px] items-center justify-center",
            hero_search_content: "w-full flex flex-col gap-y-[16px] items-center justify-center",
            hero_search: cn(
                "w-full max-w-[1135px] grid grid-cols-[auto_1fr_auto] items-center justify-center gap-x-[21px] p-[10px] border border-[1px] border-base-white ",
                "backdrop-blur-xs bg-linear-to-r from-white/47 to-white/10 rounded-full"
            ),
            header_border: "p-[1px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.7)_0%,_rgba(255,255,255,0)_100%)]",
            header_content: cn(
                "grid grid-cols-[auto_1fr_auto] px-[20px] pl-[37px] py-[12px] items-center justify-center gap-x-[20px] rounded-full",
                "bg-linear-to-r from-white/70 to-white/0 backdrop-blur-md",
                "data-[active=true]:to-white/70",
                "transition-all duration-300 ease-in-out",
            ),
            header_navigation: "flex w-full items-center justify-center",
            trusted_company: "flex flex-col gap-y-[19px] items-center justify-center",
            trusted_company_list: "flex items-center justify-center gap-x-[80px] px-[40px] py-[35px]",
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

const AtomWrapper = ({
    children,
    variant = 'default',
    className,
    asChild = false,
    style,
    ...props
}: AtomWrapperType) => {
    const Component = asChild ? Slot : 'div'

    return (
        <Component className={cn(variantAtomWrapper({ variant, className }))} {...props} style={style}>
            {children}
        </Component>
    )
}

export { AtomWrapper, variantAtomWrapper }
