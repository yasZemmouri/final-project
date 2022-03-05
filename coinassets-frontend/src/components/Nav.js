import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <Link to='/' className="navbar-brand">coinAssets</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/watchlist'>Watch List</Link></li>
        <li className="nav-tem"><Link to='/assets'>Assets</Link></li>
        <li className="nav-tem"><Link to='/login'>Login</Link></li>
      </ul>
      </div>
      </div>      
    </nav>
    
  )
}
