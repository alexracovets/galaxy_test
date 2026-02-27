"use client";

import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@utils";
import { ButtonType } from "@types";

const variantButton = cva(
    "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full transition-transform duration-150 ease-out active:scale-95 will-change-transform",
    {
        variants: {
            variant: {
                default: "text-[16px] text-base-white font-montserrat font-[500] leading-[30px] bg-linear-[336deg] from-[#0935FE] to-[#98EEFF] to-[200%]",
                contracts_posts_category: cn(
                    "text-[16px] text-base-black text-bage-text font-montserrat font-[400] bg-bage gap-x-[14px]",
                    "hover:bg-bage-active hover:text-base-white data-[active=true]:bg-bage-active data-[active=true]:text-base-white",
                    "transition-colors duration-300 ease-in-out",
                ),
                card_arrow: "bg-[linear-gradient(135deg,#0935FE_0%,#98EEFF_100%)] rounded-full",
                destructive: "",
                outline: "",
                secondary: "",
                ghost: "",
                link: "",
            },
            size: {
                default: "px-[32px] py-[14px]",
                xs: "",
                sm: "",
                lg: "",
                icon: "px-[13px] py-[9px] pr-[23px]",
                card_arrow: "w-[55px] h-[55px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: ButtonType) {
    const Comp = asChild ? Slot.Root : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(variantButton({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, variantButton }
