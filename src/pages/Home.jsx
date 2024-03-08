import React from 'react'
import Hero from '../Component/Hero/Hero'
import Premium from '../Component/Premium/Premium'

import AvatarCategory from './AvatarCategory'
import MostPopular from '../Component/MostPopular/MostPopular'
import Classic from '../Component/Classic/Classic'


const Home=()=>{
    return(
      <div className="home-container">
      <Hero />
      <Premium />
      <MostPopular />
      <Classic />
      {/* <ShopCategory /> */}
      </div>
    )
}

export default Home


