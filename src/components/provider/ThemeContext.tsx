'use client'
import { createContext, ReactNode, useState } from "react";




interface ThemeContextType {
    theme: 'light' | 'dark',
    toggleTheme: () => void;
}



const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}



export default ThemeContext