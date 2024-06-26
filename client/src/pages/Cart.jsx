import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import {userRequest} from "../requestMethods"
import { useNavigate } from "react-router-dom";


const KEY = process.env.REACT_APP_STRIPE;

const Container= styled.div`
    
`
const Wrapper= styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`
const Title= styled.h1`
    font-weight: 300;
    text-align: center;

`
const Top= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton= styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black": "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`

const TopTexts= styled.div`
     ${mobile({ display: "none"})}
`
const TopText= styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom= styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`
const Info= styled.div`
    flex:3;
`

const Product= styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`
const ProductDetail= styled.div`
    flex:2;
    display: flex;
`
const Image= styled.img`
    width: 200px;
    height:200px;
    object-fit: contain;
    margin: 10px 0px;
`
const Details= styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const ProductName= styled.span`
    
`
const ProductId= styled.span`
    
`
const ProductColor= styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${props=>props.color};

`
const ProductTon= styled.div`
    
`
const PriceDetails= styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}

`
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})}
`
const Hr= styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary= styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle= styled.h1`
    font-weight: 200;
`
const SummaryItem= styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText= styled.span`
    
`
const SummaryItemPrice= styled.span`
    
`
// const Button= styled.button`
//     width: 100%;
//     padding: 10px;
//     background-color: black;
//     color: white;
//     font-weight: 600;
//     cursor: pointer;
// `


const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token)=>{
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch (error) {
                console.error("Error making payment request:", error);
            }
        };
    
        if (stripeToken && cart.total) {
            makeRequest();
        }
    }, [stripeToken, cart.total, cart, history]);
    
  return (
    <Container>
      <Announcement/>  
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
        <TopText>Shopping Bag(2)</TopText>
        <TopText>Wishlist</TopText>
        </TopTexts>
        <TopButton type= "filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                {cart.products.map((product)=>(
                <Product>
                    <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                            <ProductName><b>Product:</b> {product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                            <ProductColor color={product.color} />
                            <ProductTon><b>TON:</b>{product.ton}</ProductTon>
                        </Details>
                    </ProductDetail>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <RemoveOutlinedIcon/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <AddOutlinedIcon/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ {product.price*product.quantity}</ProductPrice>
                    </PriceDetails>
                </Product>))}
                <Hr />
                
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>₹ 1000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>₹ -1000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                name = "PURI TRADERS" 
                image = "https://scontent.fixc1-10.fna.fbcdn.net/v/t39.30808-6/305584899_435858271978703_113299253210445531_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IyF-Jr2MKM4Q7kNvgFgicPm&_nc_ht=scontent.fixc1-10.fna&oh=00_AYAYUyeSxXMMLG8gXLmJcnUZg0Dv2Z9OfBYZYb4Hy1d8Mg&oe=66652C3D"
                billingAddress
                description ={`Your total is ₹${cart.total}`}
                amount = {cart.total*100}
                currency="INR"
                token = {onToken}
                stripeKey = {KEY}
            >
            <button 
                style = {{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    cursor: "pointer",
                }}
            >
              Pay Now!
            </button>
            </StripeCheckout>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
