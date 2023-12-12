import logo from '../../assets/theo logo.png'
import './style.css'

function Header(){
    return (
        <header className='menu'>
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
                <li className='menu-item' >
                   <a href="/pricing">home</a>
                </li>
                <li className='menu-item' >
                   <a href="/pricing">home</a>
                </li>
            </ul>

        </header>
    )
}

export default Header;