"use client";

import { VariantProps } from "class-variance-authority";
import { variantAtomImage } from "@atoms";

export interface AtomImageType {
    src: string;
    alt: string;
    variant: VariantProps<typeof variantAtomImage>['variant'];
    priority?: boolean;
    className?: string;
    noCover?: boolean;
    unoptimized?: boolean;
}