import {useState} from "react";

import './math.css'

function Hiluk() {
    const [numbers, setNumbers] = useState({
        first: 0,
        second: 0
    })
    const result = numbers.first / numbers.second

    function updateFirst(event) {
        setNumbers((preValues) => {
                return {
                    first: event.target.value,
                    second: preValues.second
                }
            }
        )
    }

    const updateSecond = (event) => {
        setNumbers((prevValues) => {
            return {
                first: prevValues.first,
                second :  event.target.value
            }
        })
    }
    return (
        <div>
            <input onChange={updateFirst}/>
            <p>/</p>
            <input onChange={updateSecond}/> <p> = {result}</p>
        </div>
    )
}

export default Hiluk