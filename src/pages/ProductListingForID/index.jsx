// Hooks
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Importando a API
import api from "../../services/api"


export function ProductListingForID() {
    // Utilizado para recuperar o ID conforme passando na URL
    const routeParams = useParams();

    // Armazenando o produto conforme selecionado pelo ID
    const [product, setProduct] = useState();

    // Token de autorização para realizar ações na página
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NDk3OTI4OTgsImV4cCI6MTY0OTg3OTI5OH0.RQFHflwwhcXS3a1XgEXKMpGSNR-Q6NKy36XIcH9nVUE"
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
        <>
            <h1>Listando produtos por ID</h1>

            {/* Forma para renderizar o produto em tela */}
            {product && (
                <div>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                    <span>{product.price}</span>
                    <span>{product.categoryId}</span>
                </div>
            )}
        </>
    )
}