// Modal Context
import { useMoreDetailsModal } from '../../hooks/moredetailsmodal'

// Imgs
import PixIcon from '../../assets/images/PaymentForms/PixIcon.png'

// Icons
import { MdClose } from 'react-icons/md'
import { RiBankCardFill } from 'react-icons/ri'
import { GiMoneyStack } from 'react-icons/gi'

// CSS
import {
    Container, Content, CloseButton,
    ModalInfosStore, PaymentFormsBg, PaymentCards
} from "./styles"


export function DetailsModal() {
    const { CloseMoreDetailsModal } = useMoreDetailsModal()

    return (
        <Container>
            <Content>
                <CloseButton>
                    <button type="button" onClick={CloseMoreDetailsModal}>
                        <MdClose />
                    </button>
                </CloseButton>

                <ModalInfosStore>
                    <div>
                        <h3>Company</h3>
                        <p>Os melhores lanches da região. Temos bebidas e lanches variados. Atendemos às regiões de Carapicuíba, Osasco &amp; Barueri.
                            Compartilhe com seus amigos e familiares.</p>
                    </div>

                    <div>
                        <h3>Funcionamento:</h3>
                        <p>Segunda à Sábado | 12:00 às 23:30</p>
                    </div>

                    <div>
                        <h3>Endereço:</h3>
                        <p>Av. Exemplo Exemplo, 777 - Barueri / SP</p>
                        <p>CEP: 00000-000</p>
                    </div>

                    <PaymentFormsBg>
                        <h3>Formas de pagamento:</h3>

                        <PaymentCards>
                            <div>
                                <h1>Crédito:</h1>
                                <p><RiBankCardFill size={22} />Mastercard</p>
                                <p><RiBankCardFill size={22} />Visa</p>
                                <p><RiBankCardFill size={22} />Elo</p>
                            </div>

                            <div>
                                <h1>Débito:</h1>
                                <p><RiBankCardFill size={22} />Mastercard</p>
                                <p><RiBankCardFill size={22} />Visa</p>
                                <p><RiBankCardFill size={22} />Elo</p>
                            </div>

                            <div>
                                <h1>PIX:</h1>
                                <p><img src={PixIcon} alt="Pix Imagem" /> PIX</p>
                            </div>

                            <div>
                                <h1>Dinheiro:</h1>
                                <p><GiMoneyStack size={24} /> Dinheiro</p>
                            </div>
                        </PaymentCards>
                    </PaymentFormsBg>

                    <div>
                        <h3>Outras informações:</h3>
                        <p>CNPJ: 00.000.000/0000-00</p>
                    </div>
                </ModalInfosStore>
            </Content>
        </Container>
    )
}