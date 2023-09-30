import Userlist from  './components/Userlist'
import Profile from  './components/Profile'
import UserState from  './context/user/userState'
import "./styles/porfile.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    
    <UserState>
    <div className="container p-7 mt-5">
      <div className="row">
        <div className="col-md-7">
        <Userlist />
        </div>
        <div className="col-md-5">
        <Profile />
        </div>
      </div>
    </div>
    </UserState>
  )
}

export default App
