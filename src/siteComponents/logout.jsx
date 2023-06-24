import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const {logout, isAuthenitcated} = useAuth0();
  return (
    isAuthenitcated && (
        <button onClick={()=>logout()}>Logout</button>
    )
  )
}

export default Logout