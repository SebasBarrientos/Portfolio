
import './App.css'
import Biography from "@/components/Biography/Biography";
import MyWork from "@/components/MyWork/MyWork";
import Img from "@/components/Img/Img";
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';


export default function Home() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='flex justify-end'>
          <ModeToggle />

        </div>
        <div className='m-3 mt-6 flex flex-col justify-center items-center'>
          <div className="">
            <Img />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 max-w-4xl">
            <Biography />
            <div className="flex flex-wrap gap-4 max-w-4xl p-4 ">
              <MyWork />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </div>
  )
}