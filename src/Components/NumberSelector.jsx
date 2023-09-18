
import styled from 'styled-components'
const NumberSelector = ({selectednumber,setselectednumber}) => {
    

    const arr=[1,2,3,4,5,6]
  return (
    <BoxContainer>
        <div className='boxes'>
        {  arr.map((value,i)=>{
                return(
                    <Box isselected={selectednumber==value} onClick={()=>{setselectednumber(value)}} key={i}>{value}</Box>
                )
              
            })
        }
        </div>
        <p>Select Number</p>
        
    </BoxContainer>
   
  )
}

export default NumberSelector
const BoxContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .boxes{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        margin-top: 10px;
    }
    @media (max-width:600px) {
        p{
        font-size: 16px;
        font-weight: 700;
        margin-top: 8px;
    }
    .boxes{
        display: flex;
        gap: 10px;
    }
        
    }
`
const Box=styled.div`
    height: 60px;
    width: 60px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isselected? "black":"white"};
    color: ${(props)=> props.isselected? "white":"black "};
@media (max-width:600px) {
    height: 40px;
    width: 40px;
    font-size: 16px;
}

`