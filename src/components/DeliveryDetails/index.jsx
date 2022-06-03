// Modal Context
import { useMoreDetailsModal } from '../../hooks/moredetailsmodal'

// Icons
import { RiEBikeLine } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'

// CSS
import { DetailsDelivery, InfoValue, MoreDetails, IconAndTime, TimeDelivery, TypeDelivery } from "./styles"


export function DeliveryDetails() {
    const { OpenMoreDetailsModal } = useMoreDetailsModal()

    return (
        <DetailsDelivery>
            <InfoValue>
                <i><GiReceiveMoney /></i>
                <span>Pedido mínimo: R$ 15,00</span>
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
                <button type="button" onClick={OpenMoreDetailsModal}>Ver mais</button>
            </MoreDetails>
        </DetailsDelivery>
    )
}