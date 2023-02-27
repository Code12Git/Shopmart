import { navData } from "./data/data";
import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="container nav__container">
        {
            navData.map((data)=>{
                return  <div className="nav__items"><img className="nav__img" src={data.url} alt='nav' />
                <p>{data.text}</p></div>
            })
        }

    </div>
  )
}

export default Navbar