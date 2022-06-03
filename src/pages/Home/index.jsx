// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MenuMobile } from '../../components/MenuMobile'
import { InputSearchPages } from '../../components/InputSearch'
import { DeliveryDetails } from '../../components/DeliveryDetails'
import { HighlightsProducts } from '../../components/HighlightsProducts'
import { CombosProducts } from '../../components/CombosProducts'
import { SnacksProducts } from '../../components/SnacksProducts'
import { DrinksProducts } from '../../components/DrinksProducts'

// Imgs
import LanchesBackground from '../../assets/images/BgImgTop/lanches-background.jpg'

// CSS
import { Container, BgImgTop, Content } from "./styles";


export function Home() {


    return (
        <>
            <Header />

            <Container>

                <BgImgTop>
                    <img src={LanchesBackground} alt="Company" />
                </BgImgTop>

                <Content>

                    <InputSearchPages />

                    <DeliveryDetails />

                    <HighlightsProducts />

                    <CombosProducts />

                    <SnacksProducts />

                    <DrinksProducts />

                </Content>
            </Container>

            <Footer />

            <MenuMobile />
        </>
    )
}