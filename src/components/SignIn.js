import React from 'react'
import {Button} from '@material-ui/core'
import firebase from 'firebase'
import {auth} from '../components/firebase'


function SignIn() {

    function SignInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }



  return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
          <Button className='signBtn' style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600', background: 'white'}} onClick={SignInWithGoogle}>Sign In With Google</Button>
      </div>
  )
}

export default SignIn