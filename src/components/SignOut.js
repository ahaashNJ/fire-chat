import React from 'react'
import { auth } from './firebase'
import {Button} from '@material-ui/core'

function SignOut() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10', marginLeft: '-10px'}}>
        <h3 style={{ paddingLeft: '15px', color: '#ffc107', fontWeight: 'bolder', }}>Fire Chat</h3>
        <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default SignOut