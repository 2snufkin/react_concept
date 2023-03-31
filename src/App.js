import './App.css';

import MathOperations from "./components/stateEnhanched/MathOper";
import EmailComp from "./components/considtion/EmailComp";
import CalculReasult from "./components/stateEnhanched/CalculReasult";
import {useState} from "react";

function App() {
    const [enteredNumbers, setEnteredNumbers] = useState({
        first: 0,
        second: 0,
        operation: '+',
    });
    console.log(enteredNumbers.first)

    const calString = enteredNumbers.first + enteredNumbers.operation + enteredNumbers.second
    /**
     * handle the change of the number left of the operation
     * @param event
     */
    function changeFirstNumberHandler(event) {
        setEnteredNumbers((prevNumbers) => ({
            first: event.target.value,
            second: prevNumbers.second,
            operation: prevNumbers.operation
        }));
    }
    /**
     * handle the change of the number right of the operation
     * @param event
     */
    function changeSecondNumberHandler(event) {
        setEnteredNumbers((prevNumbers) => ({
            first: prevNumbers.first,
            second: +event.target.value,
            operation: prevNumbers.operation

        }));

    }


    /**
     * update the math operator
     * @param event
     */
    const handelOperations = (event) => {
        setEnteredNumbers((prev) => ({
            first: prev.first,
            second: prev.second,
            operation: event.target.value
        }));

    }

    const mathMethods = {
        handleOperation : handelOperations,
        handleFirst: changeFirstNumberHandler,
        handleSecond : changeSecondNumberHandler
    }


    return (
        <div id='calculator'>
            <MathOperations eventMethods={mathMethods}></MathOperations>
            <CalculReasult mathObject={enteredNumbers}></CalculReasult>
            <EmailComp></EmailComp>

        </div>

    );
}

export default App;
