import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <button type="button" className="btn btn-primary" onClick={()=>loginWithRedirect()}>
        Login
    </button>
    )
  )
}

export default LoginButton


