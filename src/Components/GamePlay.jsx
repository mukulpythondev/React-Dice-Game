import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const GamePlay = () => {
    const [selectednumber, setselectednumber] = useState()
    const [currentdice, setcurrentdice] = useState(1)
    const [score, setscore] = useState(0)
    const randomgenerator=(max,min)=>{
        return Math.floor(Math.random()* (max - min )+min)
     }
     const notify=()=>{
      toast.error('You have not select the number!', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
     }
     const roldice=()=>{
        if(!selectednumber) return
         const randomnumber=randomgenerator(1,7)
         setcurrentdice((prev)=> randomnumber)

         if (selectednumber==randomnumber){
            setscore(prev=> prev+randomnumber)
         }
         else{
            setscore(prev=> prev-2)
         }
         setselectednumber(undefined)
     }
  return (
    <Main>
 <div className='top-section'>
 <TotalScore score={score}/>
<NumberSelector  setselectednumber={setselectednumber} selectednumber={selectednumber}/>
 </div>
 <RollDice  currentdice={currentdice} setscore={setscore} roldice={roldice} selectednumber={selectednumber} notify={notify} />
 <ToastContainer/>
    </Main>
  )
}

export default GamePlay
const Main=styled.div`
    .top-section{
    display: flex;
   justify-content: space-between;
   align-items: end;
   padding: 0 20px;
    }

    @media (max-width: 600px) {
     .top-section{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
     }
    }
`