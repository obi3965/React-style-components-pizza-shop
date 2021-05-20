import styled from 'styled-components';

import { Link  } from 'react-router-dom';
import { Container } from '../../globalStyle';

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 999;

  @media(min-width:280px) and (max-width:319px){
    height:60px;
    
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media(max-width:281px) and (max-width:320px){
  
  }
  
 
`;

export const Image = styled.img`
height:40px;
width:130px;
@media(min-width:280px) and (max-width:319px){
  height:30px;
  width:100px;
}
`


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media(min-width:280px) and (max-width:319px){
    margin-top:-19px;
  }
  @media(min-width:768px) and (max-width:1023px){
    margin-top:-16px;
    font-size: 2rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 60px;
  margin-top:20px;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  text-transform:capitalize;
  &:hover {
    color: #fd9d3e;
    transition: all 0.3s ease;
    text-decoration:none;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
      text-decoration:none;
    }
  }
`;

