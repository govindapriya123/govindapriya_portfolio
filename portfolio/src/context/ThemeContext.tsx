import {  createContext,useEffect,useState } from "react";
type Theme="light"|"dark";
interface ThemeContextType{
    theme:Theme;
    toggleTheme:()=>void;
}
interface ThemeProviderProps{
    children:React.ReactNode;
}
export const ThemeProvider=({children}:ThemeProviderProps)=>{
    const [theme,setTheme]=useState<Theme>("light");
   const toggleTheme = () => {
  setTheme((prev) => {
    const next = prev === "light" ? "dark" : "light";
    return next;
  });
};
    useEffect(()=>{
     localStorage.setItem("theme",theme);
    },[theme])
    useEffect(()=>{
      const savedTheme=localStorage.getItem("theme");
      if(savedTheme){
        setTheme(savedTheme as Theme);
      }
    },[])

    useEffect(()=>{
      console.log('Applying Theme:',theme);
      document.documentElement.classList.toggle("dark",theme==="dark");
      console.log(document.documentElement.className);
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
             {children}
        </ThemeContext.Provider>
    )
    
}
export const ThemeContext=createContext<ThemeContextType|null>(null);