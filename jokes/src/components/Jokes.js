function Setup (props) {    
    return (
        <>
            <div className="setup">
                {props.logo && <img src={props.logo} alt="Logo" className="joke-logo" />}
                <h3 className="setup">{props.setup}</h3>
                <h4 className="punchline">{props.punchline}</h4>
            </div>
        </>
    )
}
export default Setup