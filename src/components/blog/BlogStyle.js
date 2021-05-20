import styled from "styled-components";

export const BlogBox = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url("/image/blog.jpg");
  height: 60vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media(min-width:280px) and (max-width:319px){
    height:50vh;
    
  }
  @media(min-width:320px) and (max-width:767px){
    height:45vh;
  }
  @media(min-width:1024px) and (max-width:1365px){
    height:35vh;
    
  }
  @media(min-width:768px) and (max-width:1023px){
    height:40vh;
  }
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
  @media(min-width:280px) and (max-width:319px){
    font-size: 45px;
    
  }
  @media(min-width:320px) and (max-width:767px){
    font-size: 45px;
  }
`;


export const BlogContainer = styled.div`
display:flex;
justify-content:center:
align-Items:center;
flex-direction:column;
width:60%;
margin:60px auto;

@media(min-width:768px) and (max-width:1023px){
  width:92%;
  margin:20px auto;
}
@media(min-width:1024px) and (max-width:1365px){
  width:92%;
  margin:20px auto;
}
@media(min-width:280px) and (max-width:319px){
  width:92%;
  margin:20px auto;
}
@media(min-width:320px) and (max-width:767px){
  width:92%;
  margin:20px auto;
}
`

export const Image = styled.img`
height:500px;
width:100%;
@media(min-width:280px) and (max-width:319px){
  width:100%;
  height:auto;
}
@media(min-width:320px) and (max-width:767px){
  width:100%;
  height:auto;
}
`

export const BlogName = styled.h2`
margin-top:20px;
font-size:22px;
font-weight:600;
letter-spacing:1px;
@media(min-width:280px) and (max-width:319px){
  font-size:16px;
  text-align:center;
}
@media(min-width:320px) and (max-width:767px){
  font-size:17px;
  text-align:center;
}
`

export const BlogDesc = styled.p`
margin-top:10px;
@media(min-width:280px) and (max-width:319px){
  font-size:14px;
  text-align:center;
  text-align:justify;
  word-break:keep-all;
}
@media(min-width:320px) and (max-width:767px){
  font-size:14px;
  text-align:center;
}
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

  @media(min-width:280px) and (max-width:319px){
    width:84%;
    .paginationBttns{
      width: 50%;
     height: 30px;
    
    margin:auto;
  
  }
  .paginationBttns a {
      padding: 7px;
      margin: 4px;
      font-size:12px;
    }
  }
  @media(min-width:320px) and (max-width:767px){
    width:86%;
    .paginationBttns{
      width: 50%;
     height: 30px;
    
    margin:auto;
  
  }
  .paginationBttns a {
      padding: 7px;
      margin: 4px;
      font-size:12px;
    }
  }
`








