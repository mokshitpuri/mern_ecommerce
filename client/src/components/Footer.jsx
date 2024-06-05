import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import {MailOutline, Phone, Place} from '@material-ui/icons'
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

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    text-decoration: none;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PURI TRADERS.</Logo>
        <Desc>
          Leading the way for Quality Products with Excellent Customer Services from past 3 Decades.
          One stop destination for wide range of brands and products📍
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999" href="https://hi-in.facebook.com/people/Puri-Traders/100066636012084/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F" href="https://www.instagram.com/puritraderss/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023" href="mailto:puritraders75@gmail.com" target="_blank" rel="noopener noreferrer">
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
        <ContactItem> 
            <Place style = {{marginRight: "10px"}}/>Shop no. 9, MC Market, Sonipat, Haryana
        </ContactItem>
        <ContactItem>
            <a href="tel:+919812327107" style={{textDecoration: "none", color: "inherit"}}>
                <Phone style={{marginRight: "10px"}} />+91 9812327107
            </a>, 
            <a href="tel:+919812227107" style={{textDecoration: "none", color: "inherit"}}>
            +91 9812227107
            </a>
        </ContactItem>
        <ContactItem>
            <a href="mailto:puritraders75@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
                <MailOutline style={{marginRight: "10px"}} /> puritraders75@gmail.com
            </a>
        </ContactItem>
        <Payment src="/images/payments.png" />
      </Right>
    </Container>
  )
}

export default Footer;
