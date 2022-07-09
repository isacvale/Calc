import { Link } from 'react-router-dom'

export default function Navigation() {
  return <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/history">History</Link>
    </nav>
}
