import cardImage from '../images/card-image-1.png'

function Card({productStatus,rating,ratingNumber,price,title}) {    
    return (
        
        <>

                <li>
                    <div className="thumb">
                        <span className='product-info-tag'>{productStatus}</span>
                        <img src={cardImage} alt="Card image"/>
                        <div className="rating-info">
                            <span className="star"><img src={rating} alt="star"/></span>
                            <span className="rating"><span className='rating-number'>{ratingNumber}</span></span>
                            
                        </div>
                        <div className="title">
                            <p>{title}</p> 
                        </div>
                        <div className="price">
                            <span><b>From price {price}</b>  / per person</span>
                        </div>
                    </div>
                </li>
        </>
    )
}
export default Card