import api from "../../../services/api"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Container, Content } from "./styles"


export function CategoriesCreation() {
    const [name, setName] = useState()
    const navigate = useNavigate()

    const NewCategory = {
        name: name
    }

    async function saveNewCategory() {
        await api.post('categories/create', NewCategory).then(response => {
            if (response.status === 201) {
                alert('A nova categoria foi cadastrada.')
                navigate('/')
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    return (
        <Container>
            <Content>

                <h1>Criação de Categorias</h1>
                <p>Preencha a categoria abaixo e salve.</p>
                <Link to="/"><MdKeyboardArrowLeft /></Link>

                <input type="text" name="name" placeholder="Categoria" onChange={(e) => setName(e.target.value)} />

                <button type="button" onClick={saveNewCategory}>Salvar categoria</button>

            </Content>
        </Container>
    )
}