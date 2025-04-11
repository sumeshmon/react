import cardImage from '../images/card-image-1.png'

function Card(props) {
    return (
        <>

                <li>
                    <div className="thumb">
                        <span className='product-info-tag'>{props.productStatus}</span>
                        <img src={cardImage}/>
                        <div className="rating-info">
                            <span className="star"><img src={props.rating} alt="star"/></span>
                            <span className="rating">{props.ratingCount} <span className='rating-number'>{props.ratingNumber}</span></span>
                            
                        </div>
                        <div className="title">
                            <p>{props.title}{props.testBoolean}</p>
                        </div>
                        <div className="price">
                            <span><b>From {props.price} </b> / per person</span>
                        </div>
                    </div>
                </li>
        </>
    )
}
export default Card