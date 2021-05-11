import styled from "styled-components";

export const BlogBox = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url("/image/blog.jpg");
  height: 60vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BlogItems = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BlogH1 = styled.h1`
  color: #fff;
  text-transform: capitalize;
  font-family: "Playfair Display", serif;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 1px;
`;


export const BlogContainer = styled.div`
display:flex;
justify-content:center:
align-Items:center;
flex-direction:column;
width:60%;
margin:60px auto;
`

export const Image = styled.img`
height:500px;
width:100%;
`

export const BlogName = styled.h2`
margin-top:20px;
font-size:22px;
font-weight:600;
letter-spacing:1px;
`

export const BlogDesc = styled.p`
margin-top:10px;
`

export const BlogDiv = styled.div`
margin-top:40px;
`

export const PaginateDiv = styled.div`
margin-top:20px;
width:40%;
.paginationBttns{
    width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;

}
.paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #fd9d3e;
    color: #000;
    cursor: pointer;
  }



.paginationBttns a:hover {
    color: white;
    background-color: #000;
    text-decoration:none;
  }
  
  .paginationActive a {
    color: white;
    background-color: #fd9d3e;
  }
  
  .paginationDisabled a {
    color: #fff;
    background-color: #000;
  }
`








