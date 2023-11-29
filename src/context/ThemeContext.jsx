import React, {useState, useEffect, createContext} from "react";

//4
//Somebody comes to our website and save our theme, we want the
//website to remember that, so this is the page to do that.
const getInitialTheme = () =>{
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (typeof storedPrefs === 'string') {
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }
    return 'light'
}

export const ThemeContext = createContext()

export const ThemeProvider = ({initialTheme, children})=>{
    const [theme, setTheme] =useState(getInitialTheme)

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme',theme)
    }
    if (initialTheme) {
        rawSetTheme(initialTheme)
    }
    useEffect(()=> {
        rawSetTheme(theme)
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

{/*

When people visit the website, we want it to remember their preferred theme (like light or dark mode).
The getInitialTheme function figures out what theme to use.
It checks if users previously set a theme. If so, it uses that. Otherwise, it checks their device settings.
Theme Context:

We create a special place called "ThemeContext" to store theme information.
This helps different parts of the website share and use the theme info.
ThemeProvider:

The "ThemeProvider" is a tool to control the website's theme.
It takes two important things: getInitialTheme (to set the initial theme) and children (the website's content).
Setting and Updating Theme:

We change the website's appearance based on the theme by adding or removing special styles.
We use a storage system called localStorage to remember the user's theme choice.
Effect Hook:

We use useEffect to tell React to update the theme when it changes. So, if a user switches themes, the website looks different.
In simple words, this code makes the website remember and use the theme that users prefer, like light or dark mode. It also helps 
different parts of the website know about and use this theme choice using the ThemeContext. */}