import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'} className='logo'>
            <img src='/logo.png' alt='logo' />
            <img src='/title.png' alt='title' />
          </Link>
        </li>
        <li>
          <Link to={'/service'}>Service</Link>
        </li>
        <li>
          <Link to={'/product'}>Product</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
