// Icons
import { GrLocation, GrFacebook, GrTwitter } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'

// Imgs
import ImgInstaLancheOne from '../../assets/images/Footer/lanche-one.jpg'
import ImgInstaLancheTwo from '../../assets/images/Footer/lanche-two.jpg'
import ImgInstaLancheThree from '../../assets/images/Footer/lanche-three.jpg'
import ImgInstaLancheFour from '../../assets/images/Footer/lanche-four.jpg'

// CSS
import {
    Container, Content, Copyright,
    Localization, IconAndAddress, Privacity,
    BgSocialMedias, FbAndTT, DivInsta,
    InstaImgs, IconAndName
} from './styles'


export function Footer() {
    return (

        <Container>
            <Content>

                <Copyright>

                    <span>© Copyright 2022 - DeliveryApp<br />Todos os direitos reservados DeliveryApp.</span>

                    <BgSocialMedias>

                        <FbAndTT>
                            <GrFacebook />
                            <GrTwitter />
                        </FbAndTT>

                        <DivInsta>

                            <IconAndName>
                                <RiInstagramFill size={30} />
                                <span>Instagram</span>
                            </IconAndName>

                            <InstaImgs>
                                <img src={ImgInstaLancheOne} alt="Lanche" />
                                <img src={ImgInstaLancheTwo} alt="Lanche" />
                                <img src={ImgInstaLancheThree} alt="Lanche" />
                                <img src={ImgInstaLancheFour} alt="Lanche" />
                            </InstaImgs>

                        </DivInsta>

                    </BgSocialMedias>

                </Copyright>

                <Localization>
                    <h3>Localização</h3>
                    <IconAndAddress>
                        <i><GrLocation /></i>
                        <span>Av. Brigadeiro Faria Lima, 000 / São Paulo - SP</span>
                    </IconAndAddress>
                    <span>CEP: 01451-000</span>
                </Localization>

                <Privacity>
                    <h3>Privacidade</h3>
                    <a href="/home">Termos e condições de uso</a>
                    <a href="/home">Privacidade</a>
                    <a href="/home">Dicas de segurança</a>
                </Privacity>

            </Content>
        </Container>

    )
}