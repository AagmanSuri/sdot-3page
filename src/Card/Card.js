import React from 'react';
import './Card.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import arrow from './arrow.png';


const Card = () => {
    return (
        <div>
         <article className='card1'>
             <img className='imgCard1' alt = 'Loading' src={icon1}></img>
             <p className='pCard'>Start You Ai</p>
             <h2 className='h2card1'>Data Strategies your Ai</h2>
             <img className='arrow1' alt = 'Loading' src={arrow}></img>
         </article>
         <article className='card2'>
             <img className='imgCard1' alt = 'Loading' src={icon2}></img>
             <p className='pCard'>Data Analysis</p>
             <h2 className='h2card1'>Data Strategies your Ai</h2>
             <img className='arrow1' alt = 'Loading' src={arrow}></img>
         </article>
         <article className='card3'>
             <img className='imgCard1' alt = 'Loading' src={icon3}></img>
             <p className='pCard'>Data Analysis</p>
             <h2 className='h2card1'>Data Strategies your Ai</h2>
             <img className='arrow1' alt = 'Loading' src={arrow}></img>
         </article>
         <article className='card4'>
             <img className='imgCard1' alt = 'Loading' src={icon4}></img>
             <p className='pCard'>Data Analysis</p>
             <h2 className='h2card1'>Data Strategies your Ai</h2>
             <img className='arrow1' alt = 'Loading' src={arrow}></img>
         </article>

         <ul className='Learn'>
                 <li>More Services</li>
             </ul>
        
        </div>
    )
}

export default Card
