// CSS
import {
    Container, Content, Copyright,
    Localization, IconAndAddress, Privacity,
    BgSocialMedias, FbAndTT, DivInsta,
    InstaImgs, IconAndName, Contacts
} from './styles'

// Icons
import { GrLocation, GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'

// Imgs
import ImgInstaLancheOne from '../../assets/images/lanche-one.jpg'
import ImgInstaLancheTwo from '../../assets/images/lanche-two.jpg'
import ImgInstaLancheThree from '../../assets/images/lanche-three.jpg'
import ImgInstaLancheFour from '../../assets/images/lanche-four.jpg'


export function Footer() {
    return (

        <Container>
            <Content>

                <Copyright>

                    <span>© Copyright 2022 - Company<br />Todos os direitos reservados 'Company'.</span>

                    <BgSocialMedias>

                        <FbAndTT>
                            <GrFacebook />
                            <GrTwitter />
                        </FbAndTT>

                        <DivInsta>

                            <IconAndName>
                                <GrInstagram />
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
                        <span>Estrada Egílio Vitorello, 780 / Carapicuíba - SP</span>
                    </IconAndAddress>
                    <span>CEP: 06365-210</span>
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