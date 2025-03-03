"use client"

import { useContext } from "react"
import ThemeContext from "./provider/ThemeContext"

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <p>current theme : {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

const HomeContainer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <>
        <div className={`max-w-[1280px] mx-auto flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <div className="max-w-4xl min-h-96 border border-black">
            <h1>Welcome to the Theme App</h1>
            <ToggleThemeButton />
          </div>
        </div>
      </>
    </div>
  )
}

export default HomeContainer