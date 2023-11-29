//6 Connected to the Navbar.jsx
import React, { useContext } from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className='p-2'>
        {theme == 'dark' ? (
        <div className='flex items-center cursor-pointer' onClick={()=> setTheme( theme === 'dark' ? 'light': 'dark')}>
        <HiSun className='text-primary text-2xl mr-2'/> Light Mode
        </div>
        ) : (
        <div className='flex items-center cursor-pointer' onClick={()=> setTheme( theme === 'dark' ? 'light': 'dark')}>
        <HiMoon className='text-primary text-2xl mr-2'/> Dark Mode
        </div>)}
    </div>
  )
}

export default ThemeToggle

{/*It imports necessary dependencies and icons:

React: This is the core library for building user interfaces in React.
useContext: A React hook that allows components to access the values from a Context, which is used to manage global state.
HiSun and HiMoon: These are icons from the react-icons library, representing the sun and moon, typically associated with light and dark modes.
It uses the ThemeContext to access the current theme and a function to set the theme. The ThemeContext likely comes from a context provider elsewhere in your application.

Inside the component's render function, there's a conditional rendering based on the current theme:

If the current theme is 'dark':
It renders a clickable element (likely a button) that, when clicked, sets the theme to 'light'. This button displays a sun icon and "Light Mode" text.
If the current theme is 'light':
It renders a clickable element that, when clicked, sets the theme to 'dark'. This button displays a moon icon and "Dark Mode" text.
The onClick event handler is used to toggle between the themes. When a user clicks on the element, it calls the setTheme function with the opposite theme value 
('light' becomes 'dark', and 'dark' becomes 'light').

In simpler terms, this component displays a button with an icon and text, and when you click it, it changes the website's theme between light and 
dark modes based on the current theme setting. It's a user-friendly way to switch the website's appearance. */}