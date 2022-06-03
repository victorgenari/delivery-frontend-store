// Icons
import { MdAttachMoney } from 'react-icons/md'

// Imgs
import BurgerDuplo from '../../assets/images/Highlights/burger-duplo.jpg'
import XSaladaTriplo from '../../assets/images/Highlights/x-salada-triplo.jpg'

// CSS
import { BgEndPoint, BgCardsHighlights } from './styles'


export function HighlightsProducts() {
    return (
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
    )
}