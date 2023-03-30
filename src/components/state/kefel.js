import './math.css'
import {useState} from "react";

function Kefel(){

    const [numbers, setNumbers] = useState({
        first: 0,
        second: 0
    })
    const  onChangeFirst = (event) => {
        const numberChanged = event.target.value;
        setNumbers((oldState) => {
            return {
                first:numberChanged ,
                second: oldState.second
            }
        })
    };
    const  onChangeSecond = (event) => {
        const numberChanged = event.target.value;
        setNumbers((oldState) => {
            return {
                first:oldState.first ,
                second: numberChanged
            }
        })
    };
    return (
        <div>
            <input onChange={onChangeFirst}/>
            <p>*</p>
            <input onChange={onChangeSecond}/>
            <p> = {numbers.first * numbers.second}</p>
        </div>

    )

}
export default Kefel