import React from 'react'
import {Link} from 'react-router-dom';
// import logo from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
     <>
      <div className='main_home'>
           <div className='header'>
                    <h1>
                         Resturarnt
                    </h1>
                    
                    <Link to='/menu'>
                    <button>See in Menu</button>
                    </Link>
                    <p></p>
                    <Link to='/offer'>
                    <button>See in offer</button>
                    </Link>
                    
           </div>
      </div>
     </>
       
   
  )
}

export default Home
