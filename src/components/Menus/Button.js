import React from 'react'
import {ButtonShow, ButtonContainer} from './ButtonStyle'

const Button = ({button, filter}) => {
  return(
    <ButtonContainer>
   {
        button.map((cat, i)=>{
                    return <ButtonShow key={i} type="button" onClick={()=> filter(cat)} className="btn">{cat}</ButtonShow>
                })
            }

    </ButtonContainer>
   )

 }

export default Button