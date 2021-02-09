import React, { useState, useEffect } from "react";
import {
	Nav,
	NavbarContainer,
	MobileIcon,
	NavLogo,
	NavMenu,
	NavItems,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						Dolla
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItems>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								About
							</NavLinks>
						</NavItems>

						<NavItems>
							<NavLinks
								to="discover"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Discover
							</NavLinks>
						</NavItems>

						<NavItems>
							<NavLinks
								to="services"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Services
							</NavLinks>
						</NavItems>

						<NavItems>
							<NavLinks
								to="signup"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Sign Up
							</NavLinks>
						</NavItems>
					</NavMenu>

					<NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
