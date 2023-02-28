import React from "react";
import './Navbar.css'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ()=>{
    return(
        <>
         <header className="header">
      <div className="header__logo">
        <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" className="img-logo"/>
        </a>&nbsp; &nbsp;
        <div>
        <AddBusinessIcon fontSize="large"/>
        <span className="header__logoName">E-shop</span>
        <span className="header__logoName">.in</span>
        </div>
      </div>
      <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__lineOne">Hello Guest</span>
          <a href="#"><span className="header__nav__lineTwo">Sign In</span></a>
        </div>
        <div className="header__nav__itemBasket">
          <ShoppingCartIcon fontSize="small"/>&nbsp;Cart
        </div>
      </div>
    </header>
        </>
    )
}

export default Navbar;