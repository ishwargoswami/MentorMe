import './Testimonials.css'
import Card from './Card';
import { useState } from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Testimonials(props){
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

return(
    <div className='testimonials'>
        <Card review={reviews[index]}></Card>

        <div className='card-btn'>
            <button id="left-btn" onClick={leftShiftHandler}><FiChevronLeft/></button>
            <button id="right-btn" onClick={rightShiftHandler}><FiChevronRight/></button>
        </div>
        
    </div>
);
}

export default Testimonials;