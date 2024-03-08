import React from 'react'
import './Messenger.css'
import Conversion from '../Conversation/Conversion'
import Message from '../Message/Message'
const Messenger = () => {
  return (
    <div className='messenger'>
        <div className="chatMenu">
        <div className="chatMenuWrapper">
            <input placeholder='Search for friends' className='chatMenuInut'></input>
            <Conversion/>
            <Conversion/>
            <Conversion/>
            <Conversion/>
            <Conversion/>
        </div>
        </div>
        
        <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Messenger
