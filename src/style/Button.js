import styled from "styled-components"
export const Button=styled.div`

  padding: 10px 18px;
 width: 220px;
 text-align: center;
  border-radius:5px;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s background   ease-in;
&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition:  0.3s background  ease-in;
}
`
export const Outlinebutton=styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
  background-color: black;
  border: 1px solid black;
  color: white;
  transition:  0.3s background  ease-in;
}
`