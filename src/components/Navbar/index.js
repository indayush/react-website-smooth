import React from 'react'
import { 
    Nav, NavbarContainer, MobileIcon, NavLogo, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink
} from "./NavbarElements";
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItems>
                  <NavLinks to="about" >About</NavLinks>
              </NavItems>

              <NavItems>
                  <NavLinks to="discover" >Discover</NavLinks>
              </NavItems>

              <NavItems>
                  <NavLinks to="services" >Services</NavLinks>
              </NavItems>
              
              <NavItems>
                  <NavLinks to="signup" >Sign Up</NavLinks>
              </NavItems>
          </NavMenu>

          <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
          
        </NavbarContainer>
      </Nav>
    </> 
    )
}

export default Navbar
