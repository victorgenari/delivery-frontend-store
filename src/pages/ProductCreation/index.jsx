// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// Chamada para a API
import api from "../../services/api"

// Icons
import { MdKeyboardArrowLeft } from "react-icons/md"

// CSS
import { Container, Content } from './styles'

export function ProductCreation() {
    // Const para utilizar o navigate (redirecionar a URL)
    const navigate = useNavigate();

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
    async function send() {

        // Token-Config de altorização para realizar ações na tela
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA0ODg5MzQsImV4cCI6MTY1MDU3NTMzNH0.y5ikH9LB-m0WL0RTSD2DiTqc9_huT6lBfBkAIat5wAk"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        // Chamada para a API para criar um produto com base na const criada acima (product)
        await api.post('/products/create', product, config).then(response => {
            if (response.status === 201) {
                alert('Seu produto foi cadastrado.')
                navigate('/product-listing')
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    return (
        <Container>
            <Content>

                <h1>Criação de Produtos</h1>
                <p>Preencha os campos abaixo e salve.</p>
                <a href="/product-listing"><MdKeyboardArrowLeft /></a>

                {/* Recuperando tudo oq é digitando entre os inputs pelo onChange */}
                <input type="text" name="name" placeholder="Produto" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" placeholder="Valor" onChange={(e) => setPrice(e.target.value)} />
                <input type="number" name="categoryId" placeholder="Categoria" onChange={(e) => setCatergoryId(e.target.value)} />

                {/* Função enviar passada no botão */}
                <button type="button" onClick={send}>Salvar produto</button>

            </Content>
        </Container>
    )
}