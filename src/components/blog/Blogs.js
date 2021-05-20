import React, {useState, useEffect} from 'react'
import {
   BlogBox, BlogItems, 
   BlogH1,BlogContainer,
   Image, BlogName, BlogDesc, BlogDiv,PaginateDiv
   } 
  from './BlogStyle'

  import {blogs }from '../data/data'
  import ReactPaginate from 'react-paginate'
  import AOS from 'aos'


const Blogs = () => {

  const [blogList, setBlogList] = useState(blogs.slice(0,9));
  const [pageNumber, setPageNumber] = useState(0)
  const blogPerPage = 3;
  const pagesVisited = blogPerPage * pageNumber

  useEffect(() => {
    AOS.init({
      duration:2000,
      easing:'ease',
      debounceDelay:50
    })
  }, []);

const displayBlogs = blogList.slice(pagesVisited, pagesVisited + blogPerPage)
.map(blog => {
  return(
    <BlogDiv data-aos='fade-up'>
    <Image src={blog.image}/>
    <BlogName>{blog.name}</BlogName>
    <BlogDesc>{blog.desc}</BlogDesc>
    </BlogDiv>
  )
})

const pageCount = Math.ceil(blogList.length / blogPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
  setBlogList(blogList)
};
  return(
  <>
    <BlogBox>
    <BlogItems >
      <BlogH1 data-aos='fade-up'>blog</BlogH1>
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