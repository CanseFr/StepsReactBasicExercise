import {useEffect, useState} from "react";

export default function CurrencyConvert(){
    const [from, setFrom] = useState("EUR")
    const [on, setOn] = useState("USD")
    const [input, setInput] = useState()
    const [output, setOutput] = useState()


    // https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

    function listenFromValue(e){
        e.preventDefault()
        setFrom(e.target.value)
    }

    function listenOnValue(e){
        e.preventDefault()
        setOn(e.target.value)
    }

    function listenInput(e){
        e.preventDefault()
        setInput(e.target.value)
    }

    useEffect(function (){
        async function fetchData(){

            if (input === "") return

            const res = await fetch(`https://api.frankfurter.app/latest?amount=${Number(input)}&from=${from}&to=${on}`)
            const data = await res.json()
            setOutput(data.rates[on])

        }
        fetchData()
    }, [input,from,on])

    return (
        <div className="containerCounter">
            <input type="text" onChange={listenInput}/>
            <select name="" id="" value="EUR" onChange={listenFromValue}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select name="" id="" value="USD" onChange={listenOnValue}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{output} {on}</p>
        </div>
    )
}