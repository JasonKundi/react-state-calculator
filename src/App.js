import "./App.css"
import { useState } from 'react'

const mathFunctions = {
  "+": (firstNum, secondNum) => firstNum + secondNum,
  "-": (firstNum, secondNum) => firstNum - secondNum,
  "*": (firstNum, secondNum) => firstNum * secondNum,
  "/": (firstNum, secondNum) => firstNum / secondNum,
}

function App() { 
  const [firstNum, setFirstNum] = useState =(0)
  const [secondNum, setSecondNum] = useState=(0)

  const numClickLeftConsole = (number) => {
      setFirstNum(number)
    }
  
  const numClickRightConsole = (number) => {
    setSecondNum(number)
  }
  
   return ( <div className="calculator">
        <div className="panel">
          <p>{firstNum}</p>
          <div className="numbers">
            <button onClick ={() =>numClickLeftConsole(1)}>1</button>
            <button onClick ={() =>numClickLeftConsole(2)}>2</button>
            <button onClick ={() =>numClickLeftConsole(3)}>3</button>
            <button onClick ={() =>numClickLeftConsole(4)}>4</button>
            <button onClick ={() =>numClickLeftConsole(5)}>5</button>
            <button onClick ={() =>numClickLeftConsole(6)}>6</button>
            <button onClick ={() =>numClickLeftConsole(7)}>7</button>
            <button onClick ={() =>numClickLeftConsole(8)}>8</button>
            <button onClick ={() =>numClickLeftConsole(9)}>9</button>
            <button onClick ={() =>numClickLeftConsole(0)}>0</button>
            <button onClick ={() =>setFirstNum(0)}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button onClick ={() =>mathFunctions("+")}>+</button>
            <button onClick ={() =>mathFunctions("-")}>-</button>
            <button onClick ={() =>mathFunctions("*")}>*</button>
            <button onClick ={() =>mathFunctions("/")}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNum}</p>
          <div className="numbers">
            <button onClick ={() =>numClickRightConsole(1)}>1</button>
            <button onClick ={() =>numClickRightConsole(2)}>2</button>
            <button onClick ={() =>numClickRightConsole(3)}>3</button>
            <button onClick ={() =>numClickRightConsole(4)}>4</button>
            <button onClick ={() =>numClickRightConsole(5)}>5</button>
            <button onClick ={() =>numClickRightConsole(6)}>6</button>
            <button onClick ={() =>numClickRightConsole(7)}>7</button>
            <button onClick ={() =>numClickRightConsole(8)}>8</button>
            <button onClick ={() =>numClickRightConsole(9)}>9</button>
            <button onClick ={() =>numClickRightConsole(0)}>0</button>
            <button onClick ={() =>setSecondNum(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>0</p>
        </div>
    </div>
  )
}

export default App
