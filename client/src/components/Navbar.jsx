import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height:60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div `
  padding: 10px 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-content: center;
  `;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchConatiner =styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  height: 12px;
`

const Input = styled.input`
  border: none;
  text-align: center;
  ${mobile({ width: "50px" })}
`

const Center = styled.div`
  flex:1;
  text-align: center;
`

const Logo= styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}

`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:1.4, justifyContent: "center" })}

`;

const MenuItem= styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "10px", marginLeft:"8px" })}

`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language>
        <SearchConatiner>
          <Input placeholder="Search"/>
          <SearchIcon style={{color:"gray", fontSize: 16}} />
        </SearchConatiner>
        </Left>
        <Center>
          <Logo>PURI TRADERS.</Logo>
        </Center>
        <Right>
        <Link to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
        <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlinedIcon style={{height: "24px", width:"24px"}} />
          </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
