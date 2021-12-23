import styled from "styled-components";

export const Container = styled.div`
    background-color: #1F1F1D;
    display: flex;
    height: 100%;
    width: 100%;
    .rec.rec-arrow{
        display: none;
    }   
`
export const ContainerCard = styled.div`
    margin: 20px auto;
    width:355px;
    height: 720px;
    border-radius: 14px;
    background-color: #FFCC00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px #1F1F1D,
              3px 3px #FFCC00,
              4px 4px #FFCC00,
              5px 5px #FFCC00,
              6px 6px #FFCC00,
              7px 7px #FFCC00,
              8px 8px #FFCC00,
              9px 9px #FFCC00;
`
export const ContainerItens = styled.div`
    padding: 5px;
    width: 345px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 130px 0;
`
export const ContainerImage = styled.div`
    width: 345px;
    height: auto;
    overflow: hidden;
    img{
        width: 100%;
    }
`
export const Button = styled.button`
   background-color: #1F1F1D ;
   margin-top: 40px;
   color: #FFCC00;
   border-radius: 14px;
   border: none ;
   text-transform: uppercase;
   font-weight: 700;
   font-size: 14px;
   width: 180px;
   height: 40px;
   cursor:pointer;
   :hover{
       opacity: 0.9;
   }
`