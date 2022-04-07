// CSS
import { Container } from "./styles";

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Home() {
    return (
        <>

            <Header />

            <Container>
                <h1>Conteúdo Home</h1>
            </Container>

            <Footer />

        </>
    )
}