function CalculReasult({mathObject}){
    const mathString = mathObject.first + mathObject.operation + mathObject.second
    const result = eval(mathString)
    // const result = typeof (props.resultF)
    return(
        <p> {result}</p>

    );
}
export default CalculReasult
