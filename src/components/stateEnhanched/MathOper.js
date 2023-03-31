import {useState} from "react";
import './math_oper.css'


function MathOperations({eventMethods}) {

    return (
        <div>
            <input type="number" onChange={eventMethods.handleFirst}/>

            <select id="math-operations" name="math-operations" onChange={eventMethods.handleOperation}>
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (*)</option>
                <option value="/">Division (/)</option>
            </select>

            <input type="number" onChange={eventMethods.handleSecond}/>
        </div>
    );
}


export default MathOperations
