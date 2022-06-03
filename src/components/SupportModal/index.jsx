// Context Modal
import { useSupportModal } from '../../hooks/supportmodal'

// Imgs
import SupportContact from '../../assets/images/SupportModal/support-contact.svg'

// Icons
import { MdClose } from 'react-icons/md'
import { FcAndroidOs } from 'react-icons/fc'
import { RiAppleFill } from 'react-icons/ri'

// CSS
import {
    Container, Content, CloseButton, Contacts, ImageAndInfosBg,
    InfosBg, AppDownload, TelephoneNumbers
} from "./styles"


export function SupportModal() {
    const { CloseSupportModal } = useSupportModal()

    return (
        <Container>
            <Content>
                <CloseButton>
                    <button type="button" onClick={CloseSupportModal}>
                        <MdClose />
                    </button>
                </CloseButton>

                <Contacts>
                    <ImageAndInfosBg>
                        <div>
                            <img src={SupportContact} alt="Imagem Suporte" />
                        </div>

                        <InfosBg>
                            <TelephoneNumbers>
                                <h3>Telefones Úteis</h3>
                                <span>0800 000 0000</span>
                                <span>+55 11 1111-2222</span>
                                <span>+55 11 91111-2222</span>
                                <span>+55 11 92222-3333</span>
                            </TelephoneNumbers>

                            <div>
                                <h3>Email</h3>
                                <span>delivery.app@email.com</span>
                            </div>

                            <div>
                                <h3>Aplicativo para Download</h3>
                                <AppDownload>
                                    <div>
                                        <FcAndroidOs size={28} />
                                        <span>Play Store</span>
                                    </div>

                                    <div>
                                        <RiAppleFill size={25} color='#4F4F4F' />
                                        <span>App Store</span>
                                    </div>
                                </AppDownload>
                            </div>
                        </InfosBg>
                    </ImageAndInfosBg>
                </Contacts>
            </Content>
        </Container>
    )
}