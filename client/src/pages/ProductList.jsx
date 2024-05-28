import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    ${mobile({ margin: "10px 0px"})}
`
const Option = styled.option`
    
`

const ProductList = () => {
    const location= useLocation();
    const cat= location.pathname.split("/")[2];
    const [filters, setFilters]= useState({});
    const [sort, setSort]= useState("newest");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    console.log(filters);
  return (
    <Container>
    <Announcement />
    <Navbar />
    <Title>{cat}</Title>
    <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="type" onChange={handleFilters}>
                <Option disabled >
                    Type
                </Option>
                <Option>Split</Option>
                <Option>Window</Option>
            </Select>
            <Select name="star" onChange={handleFilters}>
                <Option disabled >
                    Star
                </Option>
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
            </Select>
            <Select name="ton" onChange={handleFilters}>
                <Option disabled >
                    Ton
                </Option>
                <Option>1</Option>
                <Option>1.5</Option>
                <Option>2</Option>
            </Select>
            <Select name="color" onChange={handleFilters}>
                <Option disabled >
                    Color
                </Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
                <Option>red</Option>
                <Option>gray</Option>
            </Select>
            </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e=> setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="lowToHigh">Price: Low to High</Option>
                <Option value="highToLow">Price: High to Low</Option>
            </Select>
            </Filter>
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort} />
    <Newsletter />
    <Footer />
      
    </Container>
  )
}

export default ProductList;
