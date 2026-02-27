import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@utils";
import { AtomInputType } from "@types";

const variantAtomInput = cva("outline-none",
    {
        variants: {
            variant: {
                default: "",
                hero: "text-[18px] leading-[30px] text-base-white font-montserrat font-[500]"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const AtomInput = forwardRef<HTMLInputElement, AtomInputType>(function AtomInput({
    className,
    maxLength,
    type,
    variant,
    ...props
}, ref) {
    const Comp = "input";

    return (
        <Comp
            ref={ref}
            type={type}
            maxLength={maxLength}
            slot="input"
            className={cn(
                variantAtomInput({ variant }),
                className,
            )}
            {...props}
        />
    );
});

AtomInput.displayName = "AtomInput";

export { AtomInput, variantAtomInput };
