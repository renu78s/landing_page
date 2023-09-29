import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { BiCart } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import MainBtn from './MainBtn';

const NavBar = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <>
      <nav>
        {/* logo */}
        <div className="logo center">
          Logo
          {/* <img src="" alt="logo" /> */}
        </div>

        {/* link and button  */}
        <div className="nav_links_btn">
          {/* links */}
          <div className="nav_links">
            <Link
              to="/"
              className="link nav_link_sm"
              onClick={() => setMenuShow(!menuShow)}
            >
              <BiMenu className="menu_icon" />
            </Link>
            <Link to="/" className="link nav_link">
              home
            </Link>
            <Link to="/" className="link nav_link">
              clinical evidence
            </Link>
            <Link to="/" className="link nav_link">
              about us
            </Link>
            <Link to="/" className="link nav_link">
              centers
            </Link>
            <Link to="/" className="link nav_link">
              services
            </Link>
            <Link to="/" className="link nav_link">
              blogs
            </Link>
            <Link to="/" className="link nav_link">
              careers
            </Link>
            <Link to="/" className="link nav_link">
              screening
            </Link>
            <Link to="/" className="link nav_link">
              contact us
            </Link>
            <Link to="/" className="link nav_link">
              therapy
            </Link>
            <Link to="/" className="link ">
              <BiCart className="cart" />
            </Link>
          </div>
          <div className="nav_btn_contain">
            <MainBtn text="book consultancy" />
          </div>
        </div>
      </nav>
      {/* mobile view */}
      <div>
        <div>
          <div
            className={
              menuShow ? 'nav_links_menu menushow' : 'nav_links_menu menuHide'
            }
          >
            <div className="nav_links_menu_part">
              <Link to="/" className="link nav_link_menu ">
                home
              </Link>
              <Link to="/" className="link nav_link_menu ">
                clinical evidence
              </Link>
              <Link to="/" className="link nav_link_menu ">
                about us
              </Link>
              <Link to="/" className="link nav_link_menu ">
                centers
              </Link>
              <Link to="/" className="link nav_link_menu ">
                services
              </Link>
            </div>
            <div className="nav_links_menu_part">
              <Link to="/" className="link nav_link_menu ">
                blogs
              </Link>
              <Link to="/" className="link nav_link_menu ">
                careers
              </Link>
              <Link to="/" className="link nav_link_menu ">
                screening
              </Link>
              <Link to="/" className="link nav_link_menu ">
                contact us
              </Link>
              <Link to="/" className="link nav_link_menu ">
                therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
