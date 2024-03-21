import './Card.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


function Card(props){
    let review = props.review;
    return(
        <div className='card'>
            <div className='card-img'>
                <img id="pro" src={review.image} alt="profile-pic"></img>
                <div className='img-bg'></div>
            </div>

            <div className='card-name'>
                <p>{review.name}</p>
            </div>
        
            <div className='card-job'>
                <p>{review.job}</p>
            </div>

            <div id="qleft"className='quote'>
                <FaQuoteLeft/>
            </div>

            <div className='card-text'> 
                <p>{review.text}</p>
            </div>

            <div id="qright"className='quote'> 
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;