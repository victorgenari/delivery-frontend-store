// CSS
import {
    Container, BgImgTop, InputSearch,
    DetailsDelivery, InfoValue, TimeDelivery,
    IconAndTime, TypeDelivery, MoreDetails,
    BgEndPoint, BgCardsHighlights, BgCards, BgCard
} from "./styles";

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Imgs
import LanchesBackground from '../../assets/images/BgImgTop/lanches-background.jpg'
import BurgerDuplo from '../../assets/images/Highlights/burger-duplo.jpg'
import XSaladaTriplo from '../../assets/images/Highlights/x-salada-triplo.jpg'

import Hamburgao from '../../assets/images/Lanches/hamburgao.jpg'
import XBacon from '../../assets/images/Lanches/x-bacon.jpg'
import XEgg from '../../assets/images/Lanches/x-egg.jpg'
import XSalada from '../../assets/images/Lanches/x-salada.jpg'

// Icons
import { RiEBikeLine } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineWatchLater, MdAttachMoney } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'


export function Home() {
    return (
        <>

            <Header />

            <Container>

                <BgImgTop>
                    <img src={LanchesBackground} alt="Company" />
                </BgImgTop>

                <InputSearch>
                    <i><BiSearchAlt /></i>
                    <input type="search" placeholder="Pesquise um produto" />
                </InputSearch>

                <DetailsDelivery>
                    <InfoValue>
                        <i><GiReceiveMoney /></i>
                        <span>Pedido mínimo: R$ 25,00</span>
                    </InfoValue>

                    <TimeDelivery>
                        <span>Hoje</span>
                        <IconAndTime>
                            <i><MdOutlineWatchLater /></i>
                            <span>20-30 min • Grátis</span>
                        </IconAndTime>
                    </TimeDelivery>

                    <TypeDelivery>
                        <i><RiEBikeLine /></i>
                        <span>Entrega</span>
                        <button type="button"><MdKeyboardArrowDown /></button>
                    </TypeDelivery>

                    <MoreDetails>
                        <button type="button">Ver mais</button>
                    </MoreDetails>
                </DetailsDelivery>

                <BgEndPoint>
                    <div>
                        <h1>Destaques</h1>
                    </div>

                    <BgCardsHighlights>
                        <div>
                            <img src={BurgerDuplo} alt="Burger Duplo" />
                            <h3>Burger Duplo</h3>
                            <p>Pão de hambúrguer, carne 2x, bacon, queijo &amp; molho especial.</p>
                            <h4>Serve 1 pessoa</h4>
                            <h5><MdAttachMoney size={20} /> 00,00</h5>
                        </div>

                        <div>
                            <img src={XSaladaTriplo} alt="X Salada Triplo" />
                            <h3>XL - Triplo</h3>
                            <p>Pão de hambúrguer, carne 2x, bacon, queijo &amp; molho especial.</p>
                            <h4>Serve 1 pessoa</h4>
                            <h5><MdAttachMoney size={20} /> 00,00</h5>
                        </div>
                    </BgCardsHighlights>
                </BgEndPoint>

                <BgEndPoint>
                    <div>
                        <h1>Combos</h1>
                    </div>

                    <BgCards>
                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={Hamburgao} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XBacon} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XEgg} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XSalada} alt="Imagem Lanche" />
                            </div>
                        </BgCard>
                    </BgCards>
                </BgEndPoint>

                <BgEndPoint>
                    <div>
                        <h1>Lanches</h1>
                    </div>

                    <BgCards>
                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={Hamburgao} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XBacon} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XEgg} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XSalada} alt="Imagem Lanche" />
                            </div>
                        </BgCard>
                    </BgCards>
                </BgEndPoint>

                <BgEndPoint>
                    <div>
                        <h1>Bebidas</h1>
                    </div>

                    <BgCards>
                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={Hamburgao} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XBacon} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XEgg} alt="Imagem Lanche" />
                            </div>
                        </BgCard>

                        <BgCard>
                            <div>
                                <h3>Nome Lanche</h3>
                                <p>Pão de hambúrguer, carne 3x, cheddar, salada &amp; molho especial.</p>
                                <h4>Serve 1 pessoa</h4>
                                <h5><MdAttachMoney size={20} /> 00,00</h5>
                            </div>

                            <div>
                                <img src={XSalada} alt="Imagem Lanche" />
                            </div>
                        </BgCard>
                    </BgCards>
                </BgEndPoint>

            </Container>

            <Footer />

        </>
    )
}