import { Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container flex-row">
        <Link to='/' className="navbar-brand">coinAssets</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {isAuthenticated && (
          <>
            <li className="nav-item px-2">
            <Link to='/watchlist'>Watch List</Link></li>
            <li className="nav-tem px-2"><Link to='/assets'>Assets</Link></li>
            {/*<li className="nav-tem"><Link to='/login'>Login</Link></li> */}
            <li><img src={user.picture} alt={user.name} id="profile-pic"/></li>

          </>
        )}
        <li className="nav-tem"><LoginButton/></li>
        <li className="nav-tem"><LogoutButton/></li>
      </ul>
      </div>
      </div>      
    </nav>
    
  )
}
