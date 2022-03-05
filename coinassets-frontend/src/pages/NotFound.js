import { Link } from 'react-router-dom'
import Home from "./Home"

export default function NotFound() {
  return (
    <div>
        <h1>404 - Not Found</h1>
        <Link to='/'>Go Home</Link>
    </div>
  )
}
