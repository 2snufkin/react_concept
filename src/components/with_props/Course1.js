function Course1(props){
    const {start, end} = props.dates
    return (  <div className="card">
        <div className="card-header">
            {props.children}
        </div>
        <div className="card-body">
            <h5 className="card-title">Start date: {start}</h5>
        </div>
        <div className="card-footer">
            End date: {end}
        </div>
    </div>)

}

export default Course1
