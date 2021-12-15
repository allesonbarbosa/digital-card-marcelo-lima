import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerCard, ContainerImage, ContainerItens, Button} from './styles';
import Carousel from 'react-elastic-carousel';

import Photo01 from '../../assets/foto_job_01.PNG';
import Photo02 from '../../assets/foto_job_02.PNG';
import Photo03 from '../../assets/foto_job_03.PNG';
import Photo04 from '../../assets/foto_job_04.PNG';
import Photo05 from '../../assets/foto_job_05.jpg';
import Photo06 from '../../assets/foto_job_06.jpg';
import Photo07 from '../../assets/foto_job_07.jpg';

function Photos() {
    const photoJobs = [
        { imagem: <img src={Photo01} alt="foto-trabalho-01" /> },
        { imagem: <img src={Photo02} alt="foto-trabalho-02" /> },
        { imagem: <img src={Photo03} alt="foto-trabalho-03" /> },
        { imagem: <img src={Photo04} alt="foto-trabalho-04" /> },
        { imagem: <img src={Photo05} alt="foto-trabalho-05" /> },
        { imagem: <img src={Photo06} alt="foto-trabalho-06" /> },
        { imagem: <img src={Photo07} alt="foto-trabalho-07" /> },
    ]
    const navigate = useNavigate();

    return (
        <Container>
            <ContainerCard>
                <ContainerItens>
                <h1>Fotos</h1>
                    <Carousel itemsToShow={1} 
                    style={{width:'95%',
                            height: '40%'}}>
                        {photoJobs.map(photo => (
                            <ContainerImage>
                                {photo.imagem}
                            </ContainerImage>
                        ))}
                    </Carousel>
                    <Button onClick={()=> navigate('/')}>Voltar</Button>
                </ContainerItens>
            </ContainerCard>
        </Container>
    )
}

export default Photos;