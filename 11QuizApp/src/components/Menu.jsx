import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts.js";

const Menu = () => {

    const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext)

    return (
        <div className="bg-cyan-900 mx-auto min-w-[600px] rounded p-4 min-h-[300px] flex flex-col justify-center items-center gap-2 ">
            <input
                type="text"
                className="rounded min-w-[300px] px-2 py-3 text-black "
                placeholder="Ex. John"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <button
                className="rounded px-2 hover:bg-slate-800 hover:text-white py-2 min-w-[200px] bg-black text-white"
                onClick={() => {
                    setGameState('Playing')
                }}
            >Start Quiz</button>
        </div>
    )
}

export default Menu;