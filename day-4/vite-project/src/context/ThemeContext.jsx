import {useState, useContext, createContext} from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme(theme === "light"? "dark": "light");
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = ()=>useContext(ThemeContext)