// Modal Context
import { useMoreDetailsModal } from "../../hooks/moredetailsmodal";

// Icons
import { RiEBikeLine } from "react-icons/ri";
import { MdKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// CSS
import {
  Container,
  InfoValue,
  MoreDetails,
  IconAndTime,
  TimeDelivery,
  TypeDelivery,
} from "./styles";

export function DeliveryDetails() {
  const { OpenMoreDetailsModal } = useMoreDetailsModal();

  return (
    <Container>
      <InfoValue>
        <div>
          <i>
            <RiMoneyDollarCircleLine />
          </i>
          <span>Pedido mínimo:</span>
        </div>
        <span>R$ 15,00</span>
      </InfoValue>

      <TimeDelivery>
        <span>Hoje</span>
        <IconAndTime>
          <i>
            <MdOutlineWatchLater />
          </i>
          <span>20-30 min • Grátis</span>
        </IconAndTime>
      </TimeDelivery>

      <TypeDelivery>
        <i>
          <RiEBikeLine />
        </i>
        <span>Entrega</span>
        <button type="button">
          <MdKeyboardArrowDown />
        </button>
      </TypeDelivery>

      <MoreDetails>
        <button type="button" onClick={OpenMoreDetailsModal}>
          Ver mais
        </button>
      </MoreDetails>
    </Container>
  );
}
