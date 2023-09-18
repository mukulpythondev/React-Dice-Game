import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    
    <Model>
      <ModelContent>
        <Closebutton onClick={onClose}>X</Closebutton>
        {content}
      </ModelContent>
    </Model>
  );
};

export default Modal;
const Model=styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:600px) {
     background-color: transparent;
     width: 90%;
     margin-left: 5vw;
    }
`
const ModelContent=styled.div`
  background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    position: relative;

  @media (max-width: 600px) {
    h2{
      font-size: 15px;
    }
    li{
      font-size: 12px;
    }
  }
`
const Closebutton=styled.div`
   position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover{
      scale: 0.95;
    }
`