import styled from "styled-components";
import Background from '../../assets/background.png';

export const Container = styled.div`
    background-color: #1F1F1D;
    display: flex;
    height: 100%;
    width: 100%;
`
export const ContainerPrincipal = styled.div`
    margin: 20px auto;
    width:355px;
    height: 720px;
    background: url(${Background});
    border-radius: 14px;
    box-shadow: 2px 2px #1F1F1D,
              3px 3px #FFCC00,
              4px 4px #FFCC00,
              5px 5px #FFCC00,
              6px 6px #FFCC00,
              7px 7px #FFCC00,
              8px 8px #FFCC00,
              9px 9px #FFCC00;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 160px;
    p{
        text-align: center;
    }
`
export const Image = styled.img`
    width: 80px;
    border-radius: 50%;
    margin: 15px 0;
`
export const H1 = styled.h1`
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 15px ;
`
export const ContainerSecondary = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 155px;
    margin-top: 40px;
`
export const ContainerSocialNetwork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p{
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 500;
        text-align: center;
    }
`
export const CardWhatsapp = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #075E54 0%, #026B23 100%) ;
    .logo-whatsapp{
        color: white;
        margin: 5px;
        }
`
export const CardInstagram = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%);
    .logo-instagram{
        color: white;
        margin: 5px;
        }
`
export const CardFacebook = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #0166E2 0%, #16A6FB  100%) ;
    .logo-facebook{
        color: white;
        margin: 5px;
        }
`
export const CardEmail = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #7A10AC 0%, #D121FD 100%) ;
    .logo-email{
        color: white;
        margin: 5px;
        }
`
export const ContainerServices = styled.div`
    li{
        list-style: none;
        margin-bottom: 15px;
        font-weight: 500;
    }
`
export const H2 = styled.h2`
    font-size: 15px;
    margin-bottom: 25px;
    font-weight: 700;
    text-align: center;
`
export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 160px;
    p{
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 700;
        text-align: center;
    }
    a{
        font-size: 16px;
        color: black;
        text-align: center;
        font-weight: 500;
        text-decoration: none;
    }
`
export const Button = styled.button`
   background-color: #1F1F1D ;
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