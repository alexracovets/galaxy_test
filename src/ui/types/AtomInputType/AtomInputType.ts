"use client";

import { VariantProps } from "class-variance-authority";
import { variantAtomInput } from "@atoms";
import { ComponentProps } from "react";

export interface AtomInputType extends ComponentProps<"input"> {
    variant?: VariantProps<typeof variantAtomInput>['variant'];
}