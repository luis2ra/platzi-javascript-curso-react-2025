import Button from "./components/Button"
import Counter from "./components/Counter"
import ContextApi from "./components/ContextApi"
import './App.css'

function greet(name: string): string {
  return `Hola ${name}`
}

function App() {
  const handleClick = () => alert("Ya estoy clickeado !")
  console.log(greet("Teff"))

  return (
    <>
      {/* class 20 */}
      <Button onclick={handleClick} label="Click me" />
      
      {/* class 21 */}
      <Counter />

      {/* class 22 */}
      <ContextApi /> 
    </>
  )
}

export default App
