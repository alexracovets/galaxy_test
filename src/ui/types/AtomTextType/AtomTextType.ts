'use client'

import { VariantProps } from 'class-variance-authority'
import { variantAtomText } from '@atoms'

export interface AtomTextType {
    variant?: VariantProps<typeof variantAtomText>['variant']
    className?: string
    asChild?: boolean
    children?: React.ReactNode
}
