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
}: AtomImageType) => {
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
