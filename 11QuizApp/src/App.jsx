import {Menu, Quiz, EndQuiz} from "./components"

import { useState } from "react"
import { GameStateContext } from "./helpers/Contexts.js"

const App = () => {
  // Three State ['Menu', 'Playing', 'Finished']
  const [gameState, setGameState] = useState('Menu')
  const [userName, setUserName] = useState('')
  const [score, setScore] = useState(0)

  return (
    <section className="bg-black text-white flex flex-col justify-center text-center" >
      <h2 className="text-2xl text-white mb-3">Quiz App</h2>
      <GameStateContext.Provider
        value={{ gameState, setGameState, userName, setUserName, score, setScore }} >
        {gameState === 'Menu' && <Menu />}
        {gameState === 'Playing' && <Quiz />}
        {gameState === 'Finished' && <EndQuiz />}
    </GameStateContext.Provider>
    </section>
  )
}

export default App