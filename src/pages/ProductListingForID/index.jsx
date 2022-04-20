// Hooks
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Importando a API
import api from "../../services/api"

// Icons
import { MdKeyboardArrowLeft } from "react-icons/md"

// CSS
import { Container, Content, ProductCard } from "./styles";

export function ProductListingForID() {
    // Utilizado para recuperar o ID conforme passando na URL
    const routeParams = useParams();

    // Armazenando o produto conforme selecionado pelo ID
    const [product, setProduct] = useState();

    // Token de autorização para realizar ações na página
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA0ODg5MzQsImV4cCI6MTY1MDU3NTMzNH0.y5ikH9LB-m0WL0RTSD2DiTqc9_huT6lBfBkAIat5wAk"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    // useEffect criado recuperando o ID do produto para selecioná-lo corretamente conforme clicado (routeParams.id)
    useEffect(() => {
        api.get(`products/${routeParams.id}`, config).then(response => {
            if (response.status === 200) {
                // Estado armazenando o produto aleatório conforme clicado
                setProduct(response.data.data)
            }
        })
    }, [])


    return (

        <Container>
            <Content>

                <h1>Listando produtos por ID</h1>
                <p>Informações do produto selecionado.</p>
                <a href="/product-listing"><MdKeyboardArrowLeft /></a>

                {/* Forma para renderizar o produto em tela */}
                {product && (

                    <ProductCard>
                        <div>
                            <p>Produto:</p>
                            <span>{product.name}</span>
                        </div>

                        <div>
                            <p>Descrição:</p>
                            <span>{product.description}</span>
                        </div>

                        <div>
                            <p>Valor:</p>
                            <span>{product.price}</span>
                        </div>
                    </ProductCard>

                )}

            </Content>
        </Container>

    )
}