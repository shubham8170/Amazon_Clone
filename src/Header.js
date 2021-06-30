import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const HandleAuthentication=()=>{
        if(user){
        auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img 
            className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="header_search">
                <input className="header_serach_input" type="text"/>
                <  SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                <div className="header_option" onClick={HandleAuthentication}>
                    <span className="option_one">
                        Hello {!user? 'Guest':user.email}
                    </span>
                    <span className="option_two">
                        {user?'Sign Out': 'Sign In'}
                    </span>
                </div>
                </Link>
                <div className="header_option">
                <span className="option_one">
                        Return
                    </span>
                    <span className="option_two">
                        & Orders
                    </span>
                    
                </div>
                <div className="header_option">
                <span className="option_one">
                        Your
                    </span>
                    <span className="option_two">
                        Prime
                    </span>
                    
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <div className="header_option_busket">
                    <ShoppingBasketIcon/>
                    <span className="option_two header_buaketcount">{basket?.length}</span>

                </div>
                </Link>

            </div>
            
        </div>
    )
}

export default Header
