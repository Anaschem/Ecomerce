import styles from '../../styles/Home.css'

import logo from './logo.png';

export default function Homepage() {
  return (
    <header>
        <div className='logo'>
        <p> KANA </p>
        </div>
    <div className='Navbar'>
        <ul>
            <li>
                Home
            </li>
            <li>
                Store
            </li>
            <li>
                Basket
            </li>
            <li>
                Profile
            </li>
            <li>
                Favories
            </li>
        </ul>
    </div>
    </header>
  )
}
