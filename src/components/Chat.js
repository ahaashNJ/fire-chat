import React, { useState, useEffect } from 'react'
import { db, auth } from './firebase'
import Heading from './Heading'
import SendMessge from './SendMessge'
import SignOut from './SignOut'

function Chat() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (

        <div>
            <Heading/>
            <SignOut />
            <div className='msgs'>
            {messages.map(({ id, text, photoURL, uid }) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                </div>
            ))}
            </div>
            
            <SendMessge />

        </div>
    )
}

export default Chat
