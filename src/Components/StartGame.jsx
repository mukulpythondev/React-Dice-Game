import React from 'react'
import styled from 'styled-components'
import { Button } from '../style/Button'

const StartGame = ({toggle}) => {
  return (
   <Container>
   <div className='image'>
   <img src="images/dices.png" alt="" />
   </div>
    <div className='content'>
      <h1>Dice Game</h1>
      <Button onClick={toggle}>Play Now!</Button>
    </div>
   </Container>
  )
}

export default StartGame

const Container=styled.div`
    max-width: 1180px;
    display: flex; 
    margin:0 auto;
    align-items: center ;
    height: 100vh;
  
   .image{
    img{
      width: 649px;
height: 522px;
    }
   }
   .content{
    display: flex;
    flex-direction: column;
    h1{
      font-size: 75px;
      white-space: nowrap;
      margin: 10px auto;
    }
   }
   @media (max-width: 600px) {
    flex-direction: column;
    gap: 50px;
  .image  img{
      width: 300px;
height: 300px;
    }
    .content{
    display: flex;
    flex-direction: column;
    h1{
      font-size: 36px;
      white-space: nowrap;
      margin: 10px auto;
    }
   }
   }
`;
