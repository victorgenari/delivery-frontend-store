// CSS
import {
    BackgroundImgLanches, Container,
    IconAndTime, IconDeliveryBtn,
    IconValue, MoreDetailsBtn,
    TimeDelivery, DeliveryTimeValueDetails, IconAndInputSearch
} from "./styles";

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import LanchesBackground from '../../assets/images/lanches-background.jpg'

import { RiEBikeLine } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'


export function Home() {
    return (
        <>

            <Header />

            <Container>

                <BackgroundImgLanches>
                    <img src={LanchesBackground} alt="Company" />
                </BackgroundImgLanches>

                <IconAndInputSearch>
                    <i><BiSearchAlt /></i>
                    <input type="search" placeholder="Pesquise um produto" />
                </IconAndInputSearch>

                <DeliveryTimeValueDetails>
                    <IconValue>
                        <i><GiReceiveMoney /></i>
                        <span>Pedido mínimo: R$ 25,00</span>
                    </IconValue>

                    <TimeDelivery>
                        <span>Hoje</span>
                        <IconAndTime>
                            <i><MdOutlineWatchLater /></i>
                            <span>20-30 min • Grátis</span>
                        </IconAndTime>
                    </TimeDelivery>

                    <IconDeliveryBtn>
                        <i><RiEBikeLine /></i>
                        <span>Entrega</span>
                        <button type="button"><MdKeyboardArrowDown /></button>
                    </IconDeliveryBtn>

                    <MoreDetailsBtn>
                        <button type="button">Ver mais</button>
                    </MoreDetailsBtn>
                </DeliveryTimeValueDetails>

                <div>
                    <h1>Highlights</h1>
                </div>

                <div>
                    <h1>Combos</h1>
                </div>

                <div>
                    <h1>Produtos</h1>
                </div>

            </Container>

            <Footer />

        </>
    )
}