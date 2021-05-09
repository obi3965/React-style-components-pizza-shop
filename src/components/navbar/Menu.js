import React, { useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {  
  Nav,
  NavbarContainer,
  NavLogo,
  
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  

} from '../navbar/NavStyle'

const Menu = () => {

  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              
              <img style={{width:'120px', height:'40px'}} src="../image/pizza-logo.png" alt=""/>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/menu' onClick={closeMobileMenu}>
                  menu
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
  </>
  );
}

export default Menu