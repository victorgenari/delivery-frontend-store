// CSS
import {
    BackgroundImgLanches, Container,
    IconAndTime, IconDeliveryBtn,
    IconValue, MoreDetailsBtn,
    TimeDelivery, DeliveryTimeValueDetails,
    IconAndInputSearch, Highlights, Combos,
    Products, CardsHighlights, CardsWithoutTitleHighlights,
    BgCardsCombos, CardsCombos
} from "./styles";

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Imgs
import LanchesBackground from '../../assets/images/lanches-background.jpg'
import BurgerDuplo from '../../assets/images/burger-duplo.jpg'
import XSaladaTriplo from '../../assets/images/x-salada-triplo.jpg'

// Icons
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

                <Highlights>

                    <div>
                        <h1>Destaques</h1>
                    </div>

                    <CardsWithoutTitleHighlights>
                        <CardsHighlights>
                            <img src={BurgerDuplo} alt="Burger Duplo" />
                            <h3>Burger Duplo</h3>
                            <div>
                                <p>Pão de hambúrguer, carne 2x, bacon, queijo &amp; molho especial.</p>
                                <p>Serve 1 pessoa</p>
                                <h4>R$: 00,00</h4>
                            </div>
                        </CardsHighlights>

                        <CardsHighlights>
                            <img src={XSaladaTriplo} alt="X Salada Triplo" />
                            <h3>XL - Triplo</h3>
                            <div>
                                <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                                <span>Serve 1 pessoa</span>
                                <h4>R$: 00,00</h4>
                            </div>
                        </CardsHighlights>
                    </CardsWithoutTitleHighlights>

                </Highlights>

                <Combos>
                    <h1>Combos</h1>

                    <BgCardsCombos>
                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>

                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>
                    </BgCardsCombos>

                    <BgCardsCombos>
                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>

                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>
                    </BgCardsCombos>

                    <BgCardsCombos>
                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>

                        <CardsCombos>
                            <img src="" alt="Imagem Lanche" />
                            <h3>Nome Lanche</h3>
                            <span>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</span>
                            <span>Serve 1 pessoa</span>
                            <h4>R$: 00,00</h4>
                        </CardsCombos>
                    </BgCardsCombos>
                </Combos>

                <Products>
                    <h1>Produtos</h1>
                </Products>

            </Container>

            <Footer />

        </>
    )
}