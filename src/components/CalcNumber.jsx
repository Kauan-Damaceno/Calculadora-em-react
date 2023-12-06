import React from 'react'
import './CalcNumber.css'
import { useState } from 'react'

export const CalcNumber = () => {
    const numberCalc = ["0","1","2","3","4","5","6","7","8","9"]
    const operation = ["-","x", "÷", "+"]
    const [peddingValue, setPeddingValue] = useState("")
    const [peddingOperation, setPeddingOperation] = useState("")
    const [currentValue, setCurrentValue] = useState("")
    const [completOperationValue, setCompletOperationValue] = useState("")
    
    const handleClick = (val) => {



        setCurrentValue(prevValue => {
            if(prevValue === "0"){
                return val
            } else {
                return prevValue + val
            }

        })

        setCompletOperationValue(prevValue => {
            if(prevValue == "0"){
                return val
            } else {
                return prevValue + val
            }
        })

    }

    const handleCalculate = () => {

        if (!peddingValue || !peddingOperation) return;

        const num1 = parseInt(peddingValue)
        const num2 = parseInt(currentValue)
        
        let result = ""



        switch (peddingOperation) {
            case "+":
                result = num1 + num2

                break;

            case "-": 
                result = num1 - num2
                break;

            case "÷" :
                if (num1 === 0 && num2 === 0) {
                    setCurrentValue("erro")
                    return;
                }
                result = num1 / num2
                break
            case "x": 
                result = num1 * num2
                break

            
        }
        
        setPeddingValue("")
        setCompletOperationValue(num1 + peddingOperation + num2 + "" + "=" + result)

        setCurrentValue(result)

        
        
    }

    const clear = ()=> {
        setCompletOperationValue("")
        setCurrentValue("")
    }
       
    const handleOperation = (operation)=> {
        setCompletOperationValue(currentValue + operation)
        setCurrentValue("0")
        setPeddingOperation(operation)
        setPeddingValue(currentValue)

        
    }
  return (
    <div className='container'>
        <div className="complet-Calc">{completOperationValue}</div>
        <div className="current-calc">{currentValue}</div>
        
       
           
    

        <div className="button-calc">
            <button onClick={clear}>AC</button>

            {numberCalc.map((operationNumber) => (
            
                <button key={operationNumber} onClick={()=> handleClick(operationNumber)}>{operationNumber}</button>
        
            ))}

            {operation.map((operationVal)=> (
                <button onClick={()=> handleOperation(operationVal)} key={operationVal}>{operationVal}</button>
            ))}

            <button onClick={handleCalculate}>=</button>
        </div>
        


    </div>
  )
}
