import {Link } from 'react-router-dom';

function Banner(){
    return (
        <Link exact to="/">
            <div id="banner">
                <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo" />
                <h1 id="title">The Melting Pot</h1>
            </div>
        </Link>
    )
}

export default Banner;