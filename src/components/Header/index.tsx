import logo from '../../assets/theo logo.svg'
import './style.css'

function Header(){
    return (
        <nav className='menu'>
            <img src={logo} className='logoTT' alt="logo escruta TT"/>

            <ul className='menu-list'>
                <li className='menu-item'>
                    <a href="/pricing">pricing</a>
                </li>

                <li className='menu-item' >
                   <a href="/pricing">home</a>
                </li>
                <li className='menu-item' >
                   <a href="/pricing">home</a>
                </li>
            </ul>

        </nav>
    )
}

export default Header;