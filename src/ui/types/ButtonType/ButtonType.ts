"use client";

import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { variantButton } from "@atoms";

export interface ButtonType extends ComponentProps<"button"> {
    variant?: VariantProps<typeof variantButton>['variant'];
    size?: VariantProps<typeof variantButton>['size'];
    asChild?: boolean;
}