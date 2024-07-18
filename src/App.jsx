
import './App.css'
import Biography from "@/components/Biography/Biography";
import MyWork from "@/components/MyWork/MyWork";
import Img from "@/components/Img/Img";
import { ThemeProvider } from './components/theme-provider';


export default function Home() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='m-3'>
          <div >
            <Img />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <Biography />
            <div className="flex flex-wrap gap-4 p-4">
              <MyWork />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </div>
  )
}