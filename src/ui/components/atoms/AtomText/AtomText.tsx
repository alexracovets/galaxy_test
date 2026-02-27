'use client'

import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { AtomTextType } from '@types'
import { cn } from '@utils'

const variantAtomText = cva('font-montserrat font-[400]', {
    variants: {
        variant: {
            default: 'text-[16px]',
            hero_title: "text-[60px] text-base-white leading-[60px] font-[500]",
            hero_description: "text-[18px] text-base-white leading-[30px]",
            hero_search_description: "text-[16px] text-base-white leading-[30px] font-[400]",
            logo: "text-primary text-[30px] leading-[29px] tracking-[-0.9px] font-[700]",
            h3: "text-[35px] leading-[50px] text-center text-base-black font-[600]",
            h2: "text-[45px] leading-[60px] text-center text-base-black font-[600]",
            section_description: "text-[18px] leading-[30px] text-center text-base-gray font-[400]",
            contracts_posts_title: "text-[20px] leading-[28px] text-base-black font-[600] mb-[8px]",
            contracts_posts_price: "text-[20px] leading-[27px] text-base-black font-[600] mb-[14px]",
            contracts_posts_summary: "text-[14px] leading-[24px] text-base-gray font-[400] pr-[60px]"
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

const AtomText = ({ className, variant, asChild = false, children, ...props }: AtomTextType) => {
    const Comp = asChild ? Slot : 'p'

    return (
        <Comp data-slot="text" className={cn(variantAtomText({ variant, className }))} {...props}>
            {children}
        </Comp>
    )
}

export { AtomText, variantAtomText }
