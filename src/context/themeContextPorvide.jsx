import React from "react";

const ThemeContext = React.createContext();
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    };

export default ThemeContextProvider;