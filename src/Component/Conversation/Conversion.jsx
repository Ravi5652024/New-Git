import React from 'react'
import './Conversion.css'
import user_img from '../Assets/con_userimg.jpg'

export default function Conversion() {
  return (
    <div className='conversation'>
        <img src={user_img} alt="" className="conversationImg" />
        <span className="conversationName">John Doe</span>
    </div>
  )
}
