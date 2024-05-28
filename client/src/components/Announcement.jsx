import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 23px;
    background-color: #008080;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ fontSize: "12px" })}

`

const Announcement = () => {
  return (
        <Container>
            Great Deal! Free Shipping on Orders above ₹5000
        </Container>
    )
}

export default Announcement
