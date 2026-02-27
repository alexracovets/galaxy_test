'use client'

import { AtomWrapper } from '@atoms'

import { ChildrenType } from '@types'
import { cn } from '@utils'

type ContainerProps = ChildrenType & {
  asChild?: boolean
  className?: string
}

const Container = ({ children, asChild, className }: ContainerProps) => {
  return (
    <AtomWrapper variant="container" className={cn(className)} asChild>
      <AtomWrapper className="h-fit min-h-0" asChild={asChild}>
        {children}
      </AtomWrapper>
    </AtomWrapper>
  )
}

export { Container }
