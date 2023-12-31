import { useReducer } from 'react'
import axios from 'axios'
import userReducer from './UseReducer'
import UserContext from './userContext'
import { GET_USERS, GET_PROFILE } from "../types";


const UserState = (props) => {
  
    const initialState = {
        users: [],  
        slectusers: null
    }  

    const [state, dispatch] = useReducer(userReducer, initialState)

    const getUsers = async () =>{
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: GET_USERS,
            payload: res.data.data
        })

    }
    const getProfile = async(id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id) 
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                slectusers:  state.slectusers,
                getUsers,
                getProfile
            }}
        >
            {props.children}
        </UserContext.Provider>
  )
}

export default UserState
