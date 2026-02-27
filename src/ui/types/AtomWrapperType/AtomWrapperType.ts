'use client'

import { VariantProps } from 'class-variance-authority'
import { ComponentProps, CSSProperties } from 'react'
import { variantAtomWrapper } from '@atoms'

export interface AtomWrapperType extends ComponentProps<'div'> {
    variant?: VariantProps<typeof variantAtomWrapper>['variant']
    asChild?: boolean
    style?: CSSProperties
}
