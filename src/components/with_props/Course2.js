function Course2(props){
    const {start, end} = props.dates
    return (
        <div className="card">
            <div className="card-header">
                {props.children}
            </div>
            <div className="card-body">
                <h5 className="card-title">{end}</h5>
            </div>

        </div>
    )
}
export default Course2
