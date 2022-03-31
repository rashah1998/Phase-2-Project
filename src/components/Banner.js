import { Link } from 'react-router-dom';
function Banner(){
    return (
        <Link exact to="/">
            <div id="banner">
                <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo"  />
                <button id="title"><span >The Melting Pot 🍲</span></button>
            </div>
        </Link>
    )
}

export default Banner;