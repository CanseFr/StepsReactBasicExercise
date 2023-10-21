import {useState} from "react";
import ButtonClassic from "./component/Material/ButtonClassic";


const messages = [
    "Learn React #",
    "Apply for jobs #",
    "Invest your nex income #",
];


export default function App(){

    let i = 0

    function add(arg){
        i +=  arg
    }

    add( (s) => s + 10 )

    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function handlerPrevious(){
        if (step > 1) setStep( (s) =>  s-1 )
    }

    function handleNext(){
        if (step < 3) setStep((s) => s + 1)
    }

    return(
        <>

            <button className="close" onClick={ () => setIsOpen( () => !isOpen )}>x</button>

        {isOpen && (
            <div className="steps">
                <div className="numbers">

                    <div className={step >= 1 ? "active" : ""}>1</div>
                    <div  className={step >= 2 ? "active" : ""}>2</div>
                    <div  className={step >= 3 ? "active" : ""}>3</div>

                </div>

                <StepMessage step={step}>
                    {messages[step-1]}
                </StepMessage>

                <div className="buttons">
                    <ButtonClassic onClick={handlerPrevious} bgColor={'#7950F2'} textColor={'#fff'} >👈 Previous </ButtonClassic>
                    <ButtonClassic onClick={handleNext} bgColor={'#7950F2'} textColor={'#fff'} >Next 👉</ButtonClassic>
                </div>

            </div>
        )}
        </>
    )
}

function StepMessage({children,step}){
    return    <div className="message">
                <h3>Step {step} : </h3>
                {children}
                </div>

}

