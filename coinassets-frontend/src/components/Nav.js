import { Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container flex-row">
        <Link to='/' className="navbar-brand">coinAssets</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {isAuthenticated && (
          <>
            <li className="nav-item px-2">
            <Link to='/watchlist'>Watch List</Link></li>
            <li className="nav-tem px-2"><Link to='/assets'>Assets</Link></li>
            <li><img src={user.picture} alt={user.name} id="profile-pic"/></li>
          </>
          )
        }
          <li><LoginButton/></li>
          <li><LogoutButton/></li>
      </ul>
    
      </div>

      </div>      
    </nav>
    
  )
}
