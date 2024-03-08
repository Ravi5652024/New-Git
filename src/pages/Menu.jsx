import React from 'react'
import Option from './Option'
import '../pages/CSS/Menu.css'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../Component/AddProduct/AddProduct'
import ListProduct from '../Component/ListProduct/ListProduct'
import PermanentDrawerLeft from './Slidebar1'
const Menu=()=>{
    return(
        <div className='menu'>
            {/* <Option/> */}
            <PermanentDrawerLeft/>
        </div>
    )
}

export default Menu

