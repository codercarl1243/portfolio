'use client';

import { ThemeProvider } from '@sanity/ui'
import {buildTheme} from '@sanity/ui/theme'

const studioTheme = buildTheme()


export default function SanityThemeProvider({children}: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <ThemeProvider theme={studioTheme}>
            {children}
        </ThemeProvider>
    )   

}