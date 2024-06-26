import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ height: "50vh" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    ${mobile({ width: "30px", height: "30px" })}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
    ${mobile({ height: "50vh", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    ${mobile({ height: "50%" })}
`;

const Image = styled.img`
    height: 80%;
    padding-top: 50px;
    padding-left: 50px;
    ${mobile({ height: "100%", paddingTop: "10px", paddingLeft: "0" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ padding: "10px", textAlign: "center" })}
`;

const Title = styled.h1`
    font-size: 78px;
    ${mobile({ fontSize: "24px" })}
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 3px;
    ${mobile({ margin: "20px 0px", fontSize: "16px", letterSpacing: "1px" })}
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        background-color: #eed1e6;
        transform: scale(1.1);
    }

    ${mobile({ padding: "5px", fontSize: "16px" })}
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to="/products">
                            <Button>SHOP NOW</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;
