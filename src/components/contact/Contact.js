import React, { useEffect} from 'react'
import emailjs from 'emailjs-com'
import {Container, Label, Input, Button, Form, Textarea,
ContactBox,ContactH1,ContactH2,ContactP,
ContactNum} from './ContactStyle'
import AOS from 'aos'



const Contact = () => {


    useEffect(() => {
       AOS.init({
           duration:2000,
           easing:'ease',
           debounceDelay:50,
       }) 
    }, []);
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_f2gcl0a', 'template_te773ge', e.target, 'user_1u113VVanZeLMmS9380Ue')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
  return(
    <Container>

<ContactBox data-aos='fade-up'>
     <ContactH2>
     Fresh From Pizzon
     </ContactH2>
     <ContactH1>Book online</ContactH1>
     <ContactP>
     Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
     </ContactP>

     <ContactNum>
         
             +45 53535454
         
     </ContactNum>
    </ContactBox>

    <Form onSubmit={sendEmail} data-aos='fade-up'>
   
      <Label>Name</Label>
      <Input type="text" name="name" />

      <Label>subject</Label>
      <Input type="text" name="subject" />

      <Label>email</Label>
      <Input type="email" name="email" />

      <Label>Message</Label>
      <Textarea name="message" />
     <Button type="submit">send us</Button>
    </Form>


    
    </Container>
   )

 }

export default Contact