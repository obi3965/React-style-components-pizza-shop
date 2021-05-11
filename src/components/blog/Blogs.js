import React, {useState} from 'react'
import {
   BlogBox, BlogItems, 
   BlogH1,BlogContainer,
   Image, BlogName, BlogDesc, BlogDiv,PaginateDiv
   } 
  from './BlogStyle'

  import {blogs }from '../data/data'
  import ReactPaginate from 'react-paginate'

const Blogs = () => {

  const [blogList, setBlogList] = useState(blogs.slice(0,9));
  const [pageNumber, setPageNumber] = useState(0)
  const blogPerPage = 3;
  const pagesVisited = blogPerPage * pageNumber


const displayBlogs = blogList.slice(pagesVisited, pagesVisited + blogPerPage)
.map(blog => {
  return(
    <BlogDiv>
    <Image src={blog.image}/>
    <BlogName>{blog.name}</BlogName>
    <BlogDesc>{blog.desc}</BlogDesc>
    </BlogDiv>
  )
})

const pageCount = Math.ceil(blogList.length / blogPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
};
  return(
  <>
    <BlogBox>
    <BlogItems>
      <BlogH1>blog</BlogH1>
    </BlogItems>
    </BlogBox>

    <BlogContainer>
     
    {displayBlogs}
    <PaginateDiv>
     <ReactPaginate 
      
    previousLabel = {"Previous"}
    nextLabel={"Next"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
     />
    
    </PaginateDiv>
   </BlogContainer>
    
    </>
   )

 }

export default Blogs