import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../../../services/api"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Container, Content } from './styles'


export function ProductCreation() {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [categoryId, setCatergoryId] = useState()

    const product = {
        name: name,
        description: description,
        price: price,
        categoryId: Number(categoryId)
    }

    async function send() {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA3NDU5MTMsImV4cCI6MTY1MDgzMjMxM30.4NZ88frMdyVUuzkkBjeycPBQ66-oHcMo5ZbxQr6PZDc"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

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
                <Link to="/product-listing"><MdKeyboardArrowLeft /></Link>

                <input type="text" name="name" placeholder="Produto" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" placeholder="Valor" onChange={(e) => setPrice(e.target.value)} />
                <input type="number" name="categoryId" placeholder="Categoria" onChange={(e) => setCatergoryId(e.target.value)} />

                <button type="button" onClick={send}>Salvar produto</button>

            </Content>
        </Container>
    )
}