import { GameStateContext } from "../helpers/Contexts"
import { useContext, useState } from "react"
import { Que } from '../helpers/Que'



const Quiz = () => {

    const { userName, score, setScore, setGameState } = useContext(GameStateContext)
    const [currQue, setCurrQue] = useState(0)
    const [optionChoosen, setOptionChoosen] = useState('')


    const handleChoosen = (option) => {
        setOptionChoosen(option)
    }

    const nextQue = () => {
        if (Que[currQue].ans === optionChoosen) {
            setScore(score + 1);
            console.log(setScore)
        }
        setCurrQue(currQue + 1)
    }

    const finishQuiz = () => {
        if (Que[currQue].ans === optionChoosen) {
            setScore(score + 10)
            console.log(score)
        }
        setGameState('Finished')
    }

    return (
        <div className="bg-cyan-900 mx-auto min-w-[600px] rounded p-6 min-h-[300px] flex flex-col gap-4 ">
            <h2 className="text-white">Welcome: {userName} | Your Score: {score}</h2>
            <div className=" shadow-lg rounded shadow-black p-6 flex flex-col gap-2 items-center  bg-cyan-900/90">
                <h2 className="text-white text-bold text-2xl">{Que[currQue].prompt}</h2>
                <button
                    className="px-2 py-1 bg-slate-500 rounded min-w-[200px] hover:bg-slate-400"
                    onClick={() => handleChoosen('optionA')}
                >
                    {Que[currQue].optionA}
                </button>
                <button
                    className="px-2 py-1 bg-slate-500 rounded min-w-[200px] hover:bg-slate-400"
                    onClick={() => handleChoosen('optionB')}
                >
                    {Que[currQue].optionB}
                </button>
                <button
                    className="px-2 py-1 bg-slate-500 rounded min-w-[200px] hover:bg-slate-400"
                    onClick={() => handleChoosen('optionC')}
                >
                    {Que[currQue].optionC}
                </button>
                <button
                    className="px-2 py-1 bg-slate-500 rounded min-w-[200px] hover:bg-slate-400"
                    onClick={() => handleChoosen('optionD')}
                >
                    {Que[currQue].optionD}
                </button>

                {currQue === Que.length - 1 ? (
                    <div className="flex gap-2">
                        <button className="px-2 py-1 bg-blue-500 rounded min-w-[100px] hover:bg-slate-400" onClick={() => setCurrQue(currQue - 1)}>Prev Ques </button>
                        <button className="px-2 py-1 bg-blue-500 rounded min-w-[100px] hover:bg-slate-400" onClick={finishQuiz}>Finish Quiz</button>
                    </div>
                    )
                    : (
                        <div className="flex gap-2 items-center">
                        <button className="px-2 py-1 bg-blue-500 rounded min-w-[100px] hover:bg-slate-400" onClick={() => setCurrQue(currQue - 1)}>Prev Ques </button>
                        <button className="px-2 py-1 bg-blue-500 rounded min-w-[100px] hover:bg-slate-400" onClick={nextQue}>Next Ques</button>
                    </div>
                    )
                }
                {optionChoosen}
                {console.log(score, Date.now())}


                {/* {
                  optionChoosen === `${Que[currQue].ans}`
                      && <span>Correct Ans: {Que[currQue].ans}</span>
              }
              {
                   optionChoosen !== `${Que[currQue].ans}`
                   && <span>Incorrect Ans</span>
              } */}
            </div>
        </div>
    )
}

export default Quiz
