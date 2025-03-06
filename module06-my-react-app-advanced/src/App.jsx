import { useContext } from "react"
import { ThemeProvider } from "./Context"
import { ThemeButton } from "./components/ThemeButton"
import Counter from "./components/Counter/Counter"
import CounterWithCustomHook from "./components/CounterWithCustomHook/CounterWithCustomHook"
import CounterWithReactMemo from "./components/CounterWithReactMemo/CounterWithReactMemo"
import './App.css'


function App() {
  return (
    <>
      {/* clase 16 */}
      {/* <Counter /> */}

      {/* clase 17 */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      
      {/* clase 18 */}
      {/* <CounterWithCustomHook /> */}
      
      {/* clase 17 */}
      <CounterWithReactMemo />
    </>
  )
}

export default App
