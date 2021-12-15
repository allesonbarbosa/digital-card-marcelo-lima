import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, 
    ContainerPrincipal,
    Profile,
    Image, 
    H1,
    ContainerSecondary,
    ContainerSocialNetwork,
    CardWhatsapp,
    CardTelephone,
    CardInstagram,
    CardFacebook,
    CardEmail,
    ContainerServices,
    H2,
    ContainerFooter,
    Button
 } from './styles';

import Avatar from '../../assets/foto_marcelo.jpg';
import { BsWhatsapp, BsTelephoneFill, BsInstagram, BsFacebook} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosFlash } from 'react-icons/io';

function Home() {
    const navigate = useNavigate();
  
    return (
      <Container>
        <ContainerPrincipal>
            <Profile>
                <Image src={Avatar} alt="foto-marcelo"/>
                <H1>Marcelo Lima</H1>
                <p>Profissional com mais de 10 anos de experiência</p>
            </Profile>
            <ContainerSecondary>
                <ContainerSocialNetwork>
                    <CardWhatsapp>
                        <a href="https://wa.me/5511980495627">
                            <BsWhatsapp size="30px" className="logo-whatsapp"/>
                        </a>
                    </CardWhatsapp>
                    <p>WhatsApp</p>
                    <CardTelephone>
                        <a href="tel:+5511981848161">
                            <BsTelephoneFill size="30px" className="logo-telephone"/>
                        </a>
                    </CardTelephone>
                    <p>Telefone (Tim)</p>
                    <CardInstagram>
                        <a href="http://google.com.br">
                            <BsInstagram size="30px" className="logo-instagram"/>
                        </a>
                    </CardInstagram>
                    <p>Instagram</p>
                    <CardFacebook>
                        <a href="http://google.com.br">
                            <BsFacebook size="30px" className="logo-facebook"/>
                        </a>
                    </CardFacebook>
                    <p>Facebook</p>
                    <CardEmail>
                        <a href="mailto:marcelolimajb@gmail.com">
                            <HiOutlineMail size="30px" className="logo-email"/>
                        </a>
                    </CardEmail>
                    <p>Email</p>
                </ContainerSocialNetwork>
                <ContainerServices>
                    <H2>Instalação e Manutenção:</H2>
                    <ul>
                        <li><IoIosFlash size="16px"/>Residencial</li>
                        <li><IoIosFlash size="16px"/>Comercial</li>
                        <li><IoIosFlash size="16px"/>Predial</li>
                        <li><IoIosFlash size="16px"/>Industrial</li>
                    </ul>
                </ContainerServices>
            </ContainerSecondary>
            <ContainerFooter>
                <p>Clique nos ícones e faça seu orçamento !</p>
                <Button onClick={()=> navigate('/fotos')}>FOTOS</Button>
            </ContainerFooter>
        </ContainerPrincipal>
      </Container>
  );
}

export default Home;