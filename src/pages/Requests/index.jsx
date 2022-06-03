// Tag A
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { MenuMobile } from '../../components/MenuMobile'
import { Footer } from '../../components/Footer'

// Icons
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdAttachMoney, MdKeyboardArrowRight } from 'react-icons/md'

// CSS
import {
    Container, Content, RequestCardsBackground,
    RequestCard, Date, RequestIdAndDeliveryTipe, RequestStatus,
    ValueAndDetailBackground,
    TitleAndBackToHome
} from './styles'


export function Requests() {
    return (
        <Container>

            <Header />

            <Content>

                <TitleAndBackToHome>
                    <h1>Histórico de Pedidos</h1>
                    <Link to="/">Tela inicial</Link>
                </TitleAndBackToHome>

                <RequestCardsBackground>
                    <RequestCard>
                        <Date>
                            <span>17/05/2022</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>

                    <RequestCard>
                        <Date>
                            <span>11/03/2022</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>
                </RequestCardsBackground>

                <RequestCardsBackground>
                    <RequestCard>
                        <Date>
                            <span>05/02/2022</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>

                    <RequestCard>
                        <Date>
                            <span>05/01/2022</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>
                </RequestCardsBackground>

                <RequestCardsBackground>
                    <RequestCard>
                        <Date>
                            <span>18/12/2021</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>

                    <RequestCard>
                        <Date>
                            <span>07/11/2021</span>
                        </Date>

                        <RequestIdAndDeliveryTipe>
                            <span>PEDIDO #3874356</span>
                            <span>DELIVERY</span>
                        </RequestIdAndDeliveryTipe>

                        <RequestStatus>
                            <AiOutlineCheckCircle size={20} />
                            <span>Entregue</span>
                        </RequestStatus>

                        <ValueAndDetailBackground>
                            <div>
                                <MdAttachMoney size={20} />
                                <span>53,12</span>
                            </div>

                            <div>
                                <Link to="/">VER DETALHES </Link>
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </ValueAndDetailBackground>
                    </RequestCard>
                </RequestCardsBackground>

            </Content>

            <MenuMobile />

            <Footer />
        </Container>
    )
}