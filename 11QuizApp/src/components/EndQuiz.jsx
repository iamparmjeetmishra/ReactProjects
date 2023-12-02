import { GameStateContext } from "../helpers/Contexts"
import { useContext } from "react"
import { Que } from '../helpers/Que'

const EndQuiz = () => {

    const {userName, score, setScore, setGameState } = useContext(GameStateContext)

    const reStartGame = () => {
        setScore(0)
        setGameState('Menu')
    }

  return (
      <div className="bg-cyan-900 mx-auto min-w-[600px] rounded p-6 min-h-[300px] flex flex-col gap-4 ">
          <h2 className="text-2xl text-bold">{userName} Your Quiz is Finished | Total Que: { Que.length } and  Score: {score}</h2>
          <button
            className="px-2 py-1 bg-blue-500 rounded min-w-[200px] hover:bg-slate-400"
            onClick={reStartGame}
        >
            Restart Quiz
        </button>
    </div>
  )
}

export default EndQuiz