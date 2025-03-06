import { useContext } from 'react';
import { ThemeContext } from '../../Context';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        color: theme === "light" ? "#000" : "#FFF",
      }}
      // intento de hacer el cambio de tema con clases usando tailwindcss
      // className={`${
      //   theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      // } px-4 py-2 rounded`}
    >
      Cambiar tema
    </button>
  )
}

export { ThemeButton }