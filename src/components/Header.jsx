import React,{useState} from 'react';
import Styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
const Header = () => {
    const[burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
  return (
    <Container>
     <a href="">
        <img src="./images/logo.svg" alt="no_image" />
     </a>
     <Menu>
      {cars && cars.map((car,index)=>
              <a key= {index} href="#">{car}</a>
      )}
     </Menu>
     <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu  onClick={()=>setBurgerStatus(true)}/>
     </RightMenu>
     <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose  onClick={()=>setBurgerStatus(false)}/>  
      </CloseWrapper>
      {cars && cars.map((car,index)=>
              <li key={index}><a href="#">{car}</a></li>
      )}
        <li><a href="#">Existing Invertory</a></li>
        <li><a href="#">Used Invertory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
     </BurgerNav>
    </Container>
  )
};

export default Header

const Container = Styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top: 0;
    left:0;
    right:0;
    z-index:1;
    // border:2px solid red;
`

const Menu = Styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    a{
      font-weight:600;
      text-transform: uppercase;
      padding:0 10px;
      flex-wrap: nowrap;
      // border: 2px solid green;
    }
    
    @media(max-width: 768px){
      display: none;
    }
`

const RightMenu = Styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px;
}
`

const CustomMenu = Styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = Styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#fff;
    width: 300px;
    z-index: 16;
    list-style:none;
    padding: 20px;
    diplay:flex;
    flex-direction:columm;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.4s;
    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,.2);
      a{
        font-weight: 600;
      }
    }
`
const CustomClose = Styled(CloseIcon)`
      cursor:pointer;
`
const CloseWrapper = Styled.div`
      display:flex;
      justify-content:flex-end;
      align-items:center;
`