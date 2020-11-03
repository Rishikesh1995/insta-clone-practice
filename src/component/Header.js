import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="head">
            <div className="instalogo">
            <img src="https://www.citypng.com/public/uploads/preview/-11590321744kgx0vygeu0.png" alt="instagram"/>
            </div>
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder="search"/>
            </div>
            <div className="icons">
                <HomeIcon/>
                <TelegramIcon/>
                <ExploreIcon/>
                <FavoriteBorderIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default Header
