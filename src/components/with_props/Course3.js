function Course3(props){
    const {start, end} = props.dates
        return (
            <div className="card">
                <div className="card-header">
                    {props.dates}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Started: {start}</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Ended: {end}</h5>
                </div>

            </div>
        )
}
export default Course3
