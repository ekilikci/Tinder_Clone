import logo from '../images/tinder-logo-black.png'
import colorLogo from '../images/tinder-logo-color.png'

const Nav = ({minimal, authToken}) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo}></img>
            </div>

            {!authToken && !minimal && <button className='nav-button'>Log in</button>}
        </nav>
    )
}
export default Nav