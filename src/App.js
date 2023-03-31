import './App.css';

import MathOperations from "./components/stateEnhanched/MathOper";
import EmailComp from "./components/considtion/EmailComp";
import CalculReasult from "./components/stateEnhanched/CalculReasult";

function App() {
    let result = 15 ;

    const calculate = (strCalcul) =>   {
        result = eval(strCalcul)
    }



    return (
        <div id='calculator'>
            <MathOperations onCalculate={{calculate}}></MathOperations>
            <CalculReasult resultF="result"></CalculReasult>
            <EmailComp></EmailComp>

        </div>

    );
}

export default App;
