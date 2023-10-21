import {useState} from "react";
import ButtonClassic from "../Material/ButtonClassic";

export default function CounterPlus(){

    const [step, setStep] = useState(1)
    const [incrementor, setIncrementor] = useState(0)

    const date = new Date()
    date.setDate(date.getDate() + Number(step) )



    function plusIncrementor(){
        setIncrementor(() => Number(incrementor) + Number(step))
    }

    function minusIncrementor(){
        setIncrementor(() => Number(incrementor) - Number(step))
    }

    function handleInput(e){
        e.preventDefault()
        setIncrementor(() =>  e.target.value)
    }

    function handleStep(e){
        e.preventDefault()
        setStep(() => e.target.value)
    }

    function resetIncrementor(e){
        e.preventDefault()
        setIncrementor(() => 1)
        setStep(()=> 0)
    }

    return (
        <div className="containerCounter">

            <div className="slideInput">
                <input onChange={handleStep} value={step} type="range" min={1} max={10}/> {step}
            </div>

            <ButtonClassic onClick={minusIncrementor}>-</ButtonClassic>
                <input onChange={handleInput} type="number" value={incrementor} />
            <ButtonClassic  onClick={plusIncrementor}>+</ButtonClassic>

            <p>{incrementor} days from is {date.toDateString()} </p>

            <ButtonClassic  onClick={resetIncrementor}>Reset</ButtonClassic>

        </div>
    )
}