import './App.css';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import {auth} from './components/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {

    const [user] = useAuthState(auth)

  return (
    <>
    {user ? <Chat/> : <SignIn/>}
        
        
    </>
  );
}

export default App;
