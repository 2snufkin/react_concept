import {useState} from "react";
import './math_oper.css'

function MathOperations(props) {
    const [enteredNumbers, setEnteredNumbers] = useState({
        first: 0,
        second: 0,
        operation: '+'
    });


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
        props.onCalculate(calculate(calString))
    }
    const calculate = () => {

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

    return (
        // maybe put the onchange only on select?
        <div>
            <input type="number" onChange={changeFirstNumberHandler}/>

            <select id="math-operations" name="math-operations" onChange={handelOperations}>
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (*)</option>
                <option value="/">Division (/)</option>
            </select>

            <input type="number" onChange={changeSecondNumberHandler}/>
        </div>
    );
}


export default MathOperations