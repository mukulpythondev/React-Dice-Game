import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { Button,Outlinebutton } from '../style/Button'

const RollDice = ({currentdice,roldice,notify,selectednumber,setscore}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    const modalContent = (
        <div>
          <h2>How to play the dice game</h2>
          <ol>
            <li>Select any number</li>
            <li>Click on the dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>If you get the wrong guess, then 2 points will be deducted</li>
          </ol>
        </div>
      );
  return (
    
    <DiceContainer>
<div className='imageholder' onClick={selectednumber==undefined?notify: roldice}>
    <img src={`images/dice_${currentdice}.png`} alt="" />
</div>
<p>Click on Dice to Roll</p>

<div className="btns">
    <Outlinebutton onClick={()=>{setscore(0)}}>Reset</Outlinebutton>
    <Button onClick={openModal}>Game Rules</Button>
    <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
</div>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
}
.imageholder{
    cursor: pointer;
}
.imageholder img{
    width: 200px;
height: 200px;
}
.btns{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    flex-direction: column;
}
    
`