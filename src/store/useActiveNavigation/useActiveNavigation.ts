'use client'

import { create } from 'zustand'

type ActiveNavigationStore = {
    activeNavigation: string
    setActiveNavigation: (activeNavigation: string) => void
}

export const useActiveNavigation = create<ActiveNavigationStore>((set) => ({
    activeNavigation: "",
    setActiveNavigation: (activeNavigation: string) => {
        set({ activeNavigation: activeNavigation })
    },
}))
