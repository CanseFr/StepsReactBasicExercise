import {useState} from "react";
import ButtonClassic from "../Material/ButtonClassic";

export default function Counter(){

    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const date = new Date()
    date.setDate(date.getDate() + count)

    function addStep(){
        setStep(() => step + 1)
    }

    function minusStep(){
        setStep(() => step - 1)
    }

    function addCount(){
        setCount(() => count + step)
    }

    function minusCount(){
        setCount(() => count - step)
    }

    return (
        <div className="containerCounter ">

            <div>
                <ButtonClassic onClick={minusStep} > - </ButtonClassic> Step : {step} <ButtonClassic  onClick={addStep} > + </ButtonClassic>
            </div>

            <div>
                <ButtonClassic onClick={ minusCount } > - </ButtonClassic> Count : {count} <ButtonClassic  onClick={ addCount } > + </ButtonClassic>
            </div>

            <div>
                <p> {count} Days from is {date.toDateString()} </p>
            </div>

        </div>
    )
}