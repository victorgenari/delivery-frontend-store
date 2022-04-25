import api from "../../../services/api"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Container, Content } from "./styles"


export function CategoriesCreation() {
    const [name, setName] = useState()
    const navigate = useNavigate()

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA1NzI1NDcsImV4cCI6MTY1MDY1ODk0N30.94zykTXiWAnlw6Ip216lo2ztgfuzfaqLuHNbjsYeOH4"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const NewCategory = {
        name: name
    }

    async function saveNewCategory() {
        await api.post('categories/create', NewCategory, config).then(response => {
            if (response.status === 201) {
                alert('A nova categoria foi cadastrada.')
                navigate('/')
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    useEffect(() => {
        api.get('/categories', config).then(response => {
            if (response.status === 200) {
                console.log(response)
            }
        })
    }, [])

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