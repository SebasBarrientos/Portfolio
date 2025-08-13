
import './App.css'
import Biography from "@/components/Biography/Biography";
import MyWork from "@/components/ProjectCards/ProjectCards";
import Img from "@/components/Img/Img";
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';


export default function Home() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='flex justify-end m-4'>
          <ModeToggle />
        </div>
        <div className='m-3 flex flex-col justify-center items-center'>
          <div className="">
            <Img />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 max-w-4xl">
            <Biography />
            <div className="flex flex-wrap gap-4 max-w-4xl p-4 ">
              <MyWork />
            </div>
          </div>
          <div className="flex flex-wrap justify-around items-center gap-20 max-w-4xl p-4 border-t text-sm text-muted-foreground">
            <a href="https://github.com/SebasBarrientos" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://www.linkedin.com/in/sebasbarrientos/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </ThemeProvider>

    </div>
  )
}