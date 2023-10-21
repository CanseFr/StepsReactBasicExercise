// import {useState} from "react";
//
// export default function Counta(){
//
//     const [amount, setAmount] = useState(0)
//     const [ownTips, setOwnTips] = useState(0)
//     const [otherTips, setOtherTips] = useState(0)
//
//     return (<div className="steps">
//         <Amount
//             amount={amount}
//             setAmount={setAmount}
//             ownTips={ownTips}
//             setOwnTips={setOwnTips}
//             otherTips={otherTips}
//             setOtherTips={setOtherTips}
//         />
//     </div>)
// }
//
// function Amount({amount,setAmount,ownTips,setOwnTips,otherTips,setOtherTips}){
//
//     function onAmount(e){
//         e.preventDefault()
//         setAmount(()=> Number( e.target.value))
//     }
//
//     return (<div>
//         <p>
//             How much was the bill ?
//             <input value={amount} onChange={onAmount} type="text"/>
//             <OwnTips ownTips={ownTips} setOwnTips={setOwnTips} />
//             <OtherTips otherTips={otherTips} setOtherTips={setOtherTips} />
//             <Display
//                 amount={amount}
//                 setAmount={setAmount}
//                 ownTips={ownTips}
//                 setOwnTips={setOwnTips}
//                 otherTips={otherTips}
//                 setOtherTips={setOtherTips}
//             />
//         </p>
//     </div>)
// }
//
// function OwnTips({ownTips,setOwnTips}){
//
//     function onOwnTips(e){
//         e.preventDefault()
//         setOwnTips(()=> Number(e.target.value) )
//     }
//
//     return (<div>
//         <p>
//             How did you like the service ?
//             <select onChange={onOwnTips} value={ownTips} name="" id="">
//                 <option value="0">Dissatisfied (0%)</option>
//                 <option value="5">It was okay (5%)</option>
//                 <option value="10">It was good (10%)</option>
//                 <option value="20">Absolutely amazing (20%)</option>
//             </select>
//         </p>
//     </div>)
// }
//
// function OtherTips({otherTips, setOtherTips}){
//     function onOtherTips(e){
//         e.preventDefault()
//         setOtherTips(() =>  Number(e.target.value))
//     }
//     return(<div>
//         <p>
//             How did your friend like the service ?
//             <select onChange={onOtherTips} value={otherTips} name="" id="">
//                 <option value="0">Dissatisfied (0%)</option>
//                 <option value="5">It was okay (5%)</option>
//                 <option value="10">It was good (10%)</option>
//                 <option value="20">Absolutely amazing (20%)</option>
//             </select>
//         </p>
//     </div>)
// }
//
// function Display({amount,setAmount,ownTips,setOwnTips,otherTips,setOtherTips}){
//
//     function handleReset(e){
//         setAmount(()=>  0)
//         setOwnTips(()=>  0)
//         setOtherTips(() => 0)
//     }
//
//     if (amount === 0 ) return
//
//     let averageTips = ((ownTips + otherTips) / 2) /100
//     let totalBillTips = amount * averageTips
//
//     return <div>
//         <p>You pay {totalBillTips + amount}  (${amount} + ${averageTips})</p>
//         <button onClick={handleReset} >Reset</button>
//     </div>
// }


import {useState} from "react";

export default function Counta(){

    const [amount, setAmount] = useState(0)
    const [ownTips, setOwnTips] = useState(0)
    const [otherTips, setOtherTips] = useState(0)

    return (<div className="steps">
        <Amount
            amount={amount}
            setAmount={setAmount}
            ownTips={ownTips}
            setOwnTips={setOwnTips}
            otherTips={otherTips}
            setOtherTips={setOtherTips}
        />
    </div>)
}

function Amount({amount,setAmount,ownTips,setOwnTips,otherTips,setOtherTips}){

    function onAmount(e){
        e.preventDefault()
        setAmount(()=> Number( e.target.value))
    }

    return (<div>
        <p>
            How much was the bill ?
            <input value={amount} onChange={onAmount} type="text"/>
            <Tips ownTips={ownTips} setOwnTips={setOwnTips} >How did you like the service ?</Tips>
            <Tips ownTips={otherTips} setOwnTips={setOtherTips} >How did your friend like the service ?</Tips>
            <Display
                amount={amount}
                setAmount={setAmount}
                ownTips={ownTips}
                setOwnTips={setOwnTips}
                otherTips={otherTips}
                setOtherTips={setOtherTips}
            />
        </p>
    </div>)
}

function Tips({ownTips,setOwnTips, children}){

    function onOwnTips(e){
        e.preventDefault()
        setOwnTips(()=> Number(e.target.value) )
    }

    return (<div>
        <p>
            {children}
            <select onChange={onOwnTips} value={ownTips} name="" id="">
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </p>
    </div>)
}

function Display({amount,setAmount,ownTips,setOwnTips,otherTips,setOtherTips}){

    function handleReset(e){
        setAmount(()=>  0)
        setOwnTips(()=>  0)
        setOtherTips(() => 0)
    }

    if (amount === 0 ) return

    let averageTips = ((ownTips + otherTips) / 2) /100
    let totalBillTips = amount * averageTips

    return <div>
        <p>You pay {totalBillTips + amount}  (${amount} + ${averageTips})</p>
        <button onClick={handleReset} >Reset</button>
    </div>
}