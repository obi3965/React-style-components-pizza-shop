import React,{useState} from 'react'
import Banner from '../components/banner/Banner'
import { chefsData, footer, latestNews, serviceData } from '../components/data/data'
import Button from '../components/Menus/Button'
import Menus from '../components/Menus/Menus'
import Services from '../components/services/Services'
import {menu} from '../components/data/data'
import {TabContainer, TabDesc, TabH1} from '../components/Menus/MenusStyle'
import Contact from '../components/contact/Contact'
import Chef from '../components/chef/Chef'
import News from '../components/news/News'
import About from '../components/about/About'
import Footer  from '../components/footer/Footer'


const allCategories = ['All', ...new Set(menu.map(item => item.category))]
console.log(allCategories);


const Home = () => {

  const [menuItem, setMenuItem] = useState(menu);
  const [buttons, setButtons] = useState(allCategories);


  //filter function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(menu);
      return;
    }

    const filteredData = menu.filter(item => item.category ===  button);
    setMenuItem(filteredData)
    setButtons(buttons)
  }

 

  return(
    <>
      <Banner/>
      <Services data={serviceData} />
      
      <TabContainer>
       <TabDesc>Fresh From Pizzon</TabDesc>
       <TabH1>our special menu</TabH1>
      <Button button={buttons} filter={filter}/>
      <Menus menuItem={menuItem} />
      </TabContainer>
      

      <Contact/>

      <Chef data={chefsData}/>


      <News data={latestNews}/>

      <About/>

      <Footer footerData={footer}/>
    </>
   )

 }

export default Home