'use client'

import { VariantProps } from 'class-variance-authority'
import { variantAtomLink } from '@atoms'

export interface AtomLinkType {
    variant?: VariantProps<typeof variantAtomLink>['variant']
    className?: string
    children?: React.ReactNode
    href: string
    style?: React.CSSProperties
    target?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
