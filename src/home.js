import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import icon from './belvedere.png'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
          
            <div className='main'>
             <Link to='/history' style={{ textDecoration: 'none' }}>
               <div className='title'>
                 <div className='content'>
            <p>THE WORLD'S<br/> #1 VODKA</p>
            <div className='info'>
            <span className='explore'>Explore</span>
            <FaArrowAltCircleRight className='arrow'/>
            </div>
            </div>
             </div>
             </Link>
             <Link to='/cocktail' style={{ textDecoration: 'none' }}> 
             <div className='title-2'>
               <div className='content'>
            <p>BEST OF<br/>COCKTAILS</p>
            <div className='info'>
            <span className='explore'>Explore</span>
            <FaArrowAltCircleRight className='arrow'/>
            </div>
            </div>
             </div>
             </Link>    
          </div>
          <hr/>
          <div class='b-title'>
              BOTTLES
            </div>

          <div className='row-2'>
            
           <div className='vodka-icon'>
                <img src={icon}/>
                <div className='about-b'>
                  Classic Bottle
                </div>
                </div>
                <div className='vodka-icon'>
               
                <img src='https://www.saq.com/media/catalog/product/1/1/11155825-1_1580613625.png?quality=80&fit=bounds&height=&width='/>
                <div className='about-b'>
                  Belvedere Intense 
                </div>
                </div>
                <div className='vodka-icon'>
                <img src='https://bottlestore.co.za/wp-content/uploads/Belvedere-Vodka-Product-Red-750ml.png'/>
                <div className='about-b'>
                  Red Special Edition Bottle
                </div>
             </div>
          </div>
          <div className='logo'>
                <img src='https://www.artandstick.be/getsupercustomizedimage.php5?objid=6287&colorid1=43&colorid2=4&colorid3=4&colorid4=4&colorid5=4&way=NORMAL&transparent=Y'/>
            </div>
            <div className='footer'>
              <ul>
                <li>Conditions of use</li>
                <li>Accessibility</li>
                <li>Drink Responsibly</li>
                <li>Contact us</li>
              </ul>
            </div>
        </div>
    )
}

export default Home
