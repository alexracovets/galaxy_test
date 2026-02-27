'use client'

import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import type { AtomWrapperType } from "@types";
import { cn } from '@utils'

const variantAtomWrapper = cva('', {
    variants: {
        variant: {
            default: 'w-full',
            hero: "w-full h-screen relative flex justify-center items-center"
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
