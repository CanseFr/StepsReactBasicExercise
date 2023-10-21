import {useState} from "react";

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
                <button className="button-main" onClick={minusStep} > - </button> Step : {step} <button className="button-main" onClick={addStep} > + </button>
            </div>

            <div>
                <button className="button-main" onClick={ minusCount } > - </button> Count : {count} <button className="button-main" onClick={ addCount } > + </button>
            </div>

            <div>
                <p> {count} Days from is {date.toDateString()} </p>
            </div>

        </div>
    )
}