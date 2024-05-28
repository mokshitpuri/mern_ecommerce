import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PURI TRADERS.</Logo>
        <Desc>Leading the way for Quality Products with Excellent Customer Services from past 3 Decades.
        One stop destination for wide range of brands and products📍</Desc>
        <SocialContainer>
            <SocialIcon color = "3B5999" >
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color = "E4405F">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color = "55ACEE">
                <TwitterIcon />
            </SocialIcon>
            <SocialIcon color = "E60023">
                <EmailIcon />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Daily Appliances</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><RoomIcon style={{marginRight:"10px"}}/>Shop no. 9, MC Market, Sonipat, Haryana</ContactItem>
        <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>+91 9812327107 , +91 9812227107</ContactItem>
        <ContactItem><EmailIcon style={{marginRight:"10px"}} />puritraders75@gmail.com</ContactItem>
        <Payment src= "./images/payments.png"/>
      </Right>
    </Container>
  )
}

export default Footer
