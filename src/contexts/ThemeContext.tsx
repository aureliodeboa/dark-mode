import {createContext, ReactNode, useContext, useEffect, useState } from "react";

const THEME_LOCAL_KEY= "ThemeContextContent"; //chave primaria do que será salvo no local storage

//cria o type do context
type ThemeContextType ={
    theme: String;
    setTheme: (newTheme:string)=>void;
} 


export const ThemeContext = createContext<ThemeContextType | null>(null); //cria o context

export const ThemeProvider = ({children} :  {children: ReactNode })=>{ 
    const [theme, setTheme]= useState(
        localStorage.getItem(THEME_LOCAL_KEY) || 'dark' //procura qual tema esta definido, caso null coloca-se dark
    );
    useEffect(()=>{
        if(theme=='dark')
            {
                document.documentElement.classList.add('dark');
            }
            else{
                document.documentElement.classList.remove('dark');
            }
        localStorage.setItem(THEME_LOCAL_KEY, theme);  //seta o tema no local storage
    },[theme])

    return(
    <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>  //retorna o provider
)



}
export const useTheme = ()=> useContext(ThemeContext); //hook para ficar mais simples