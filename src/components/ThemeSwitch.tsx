import { useTheme } from "@/contexts/ThemeContext"

export const ThemeSwitch = () =>
{
    const themeCtx= useTheme();

    const handleThemeToggle=()=>{
       if(themeCtx)
        {
           themeCtx.setTheme( themeCtx.theme==='dark'? 'light':'dark');
        }
    }
   return(
    <div className="fixed top-2 right-0 left-0 text-center cursor-pointer"
    onClick={handleThemeToggle}
    >
        {themeCtx?.theme==='dark'&& 'Mudar Para Light'}
        {themeCtx?.theme==='light'&& 'Mudar Para Dark'}
    </div>
   )
}