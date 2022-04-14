// Hooks
import { useState } from "react"

// Chamada para a API
import api from "../../services/api"

export function ProductCreation() {

    // Estados criados para pegar o valor de cada input abaixo e para informar ao produto também abaixo quem são esses valores
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [categoryId, setCatergoryId] = useState();

    const product = {
        name: name,
        description: description,
        price: price,
        // convertendo o categoryId para número
        categoryId: Number(categoryId)
    }

    // Função criada com async-await por existir chamadas pra API dentro dela
    async function enviar() {

        // Token-Config de altorização para realizar ações na tela
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NDk3OTI4OTgsImV4cCI6MTY0OTg3OTI5OH0.RQFHflwwhcXS3a1XgEXKMpGSNR-Q6NKy36XIcH9nVUE"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        // Chamada para a API para criar um produto com base na const criada acima (product)
        await api.post('/products/create', product, config).then(response => {
            if (response.status === 201) {
                alert('Produto cadastrado')
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    return (
        <>

            <h1>Criar Produto</h1>

            {/* Recuperando tudo oq é digitando entre os inputs pelo onChange */}
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
            <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
            <input type="number" name="categoryId" onChange={(e) => setCatergoryId(e.target.value)} />

            {/* Função enviar passada no botão */}
            <button type="button" onClick={enviar}>Enviar</button>

        </>
    )
}