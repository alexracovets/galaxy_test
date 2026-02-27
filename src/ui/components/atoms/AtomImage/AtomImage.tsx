"use client";

import { cva } from "class-variance-authority";
import Image from "next/image";

import type { AtomImageType } from "@types";
import { cn } from "@utils";

const variantAtomImage = cva("", {
    variants: {
        variant: {
            default: "w-full",
            hero: "w-full h-full absolute top-0 left-0 z-[-1]",
            trusted_company_list_item: "w-auto h-auto",
            contracts_posts_category: "w-[42px] h-[42px] &>img:p-[8px] object-contain bg-gradient-to-r from-[#3276FA] to-[#0026FF] rounded-full",
            contracts_posts: "w-auto h-auto object-cover mb-[24px]",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const AtomImage = ({
    src,
    alt,
    variant,
    priority = false,
    className,
    noCover = false,
    unoptimized = true,
    intrinsic = false,
}: AtomImageType) => {
    if (intrinsic) {
        return (
            <img
                src={src || ""}
                alt={alt || "image"}
                loading={priority ? "eager" : "lazy"}
                className={cn(variantAtomImage({ variant }), className)}
            />
        );
    }

    return (
        <div className={cn("relative", variantAtomImage({ variant }), className)}>
            <Image
                src={src || ""}
                alt={alt || "image"}
                priority={priority}
                sizes="100%"
                fill
                className={cn(
                    !noCover ? "object-cover" : "object-contain",
                    "transition-opacity ease-in-out duration-300",
                )}
                unoptimized={unoptimized}
            />
        </div>
    );
};

export { variantAtomImage };
