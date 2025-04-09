let image = 'https://placehold.co/400'
let personName = 'Sumesh'
let designation = 'CEO'
function Info (){
    return (
        <>
            <picture>
                <img src={image} className="people-image"/>
                <h2>{personName}</h2>
                <h4>{designation}</h4>
                <div className="info-btn">
                    <button>Email</button>
                    <button>Linkedin</button>
                </div>
            </picture>
        </>
    )
}

export default Info