import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const {loginWithRedirect, isAuthenitcated} = useAuth0();
  return (
    !isAuthenitcated && (
        <button onClick={()=>loginWithRedirect()}>Login</button>
    )
  )
}

export default Login