import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='lg'>
                <img src='https://seeklogo.com/images/B/Belvedere-logo-21EE29C178-seeklogo.com.png'/>
            </div>
           <div className='links'>
               <ul>
                 <li><Link to='/'>Home</Link></li> 
                 <li><Link to='/history'>History</Link></li>
                 <li><Link to='/cocktail'>Cocktails</Link></li>
               </ul>
           </div>
        </div>
    )
}

export default Navbar
