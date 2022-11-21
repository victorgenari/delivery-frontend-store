// API
import api from "../../../services/api"

// React
import { useEffect, useState } from "react"

// React DOM
import { useNavigate, useParams, Link } from "react-router-dom"

// Icons
import { MdKeyboardArrowLeft } from "react-icons/md"
import { BsCheck2All } from "react-icons/bs"

// CSS
import { Container, Content, DescriptionsAndCategoryBg, ImgInputButtonAndMessageBg } from "./styles"


export function CategoriesEditing() {
    const [category, setCategory] = useState()
    const [name, setName] = useState()

    const [image, setImage] = useState()
    const [htmlEvent, setHtmlEvent] = useState()
    const [resultImage, setResultImage] = useState(false)
    const routeParams = useParams()
    const navigate = useNavigate()

    // Pegando/selecionando a categoria pelo ID
    useEffect(() => {
        api.get(`categories/${routeParams.id}`).then(response => {
            if (response.status === 200) {
                setCategory(response.data.data)
                setImage(response.data.data.picture)
            }
        })
    }, [routeParams.id])

    // Editando a categoria
    async function editData() {
        const categoryChanges = {
            name: name,
        }

        await api.patch(`categories/${routeParams.id}/update`, categoryChanges).then(response => {
            if (response.status === 200) {
                alert('A categoria foi alterada.')
                navigate(`/categories/listing`)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    // Preview da foto
    function previewImage(event) {
        if (event.target.files.length !== 0) {
            setImage(URL.createObjectURL(event.target.files[0]))
            setHtmlEvent(event)
        }
    }

    // Alterando/Salvando a foto
    async function changeAvatar() {
        const data = new FormData()
        data.append('file', htmlEvent.target.files[0])

        await api.patch(`categories/${routeParams.id}/change-avatar`, data)
            .then((response) => {
                if (response.status === 200) {
                    setResultImage(true)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <Container>
            <Content>
                <DescriptionsAndCategoryBg>
                    <h1>Alterações</h1>
                    <p>Caso altere alguma categoria, não esqueça de salvá-la.</p>
                    <Link to="/categories/listing"><MdKeyboardArrowLeft size={30} /></Link>

                    <input type="text" defaultValue={category && category.name} onChange={(e) => setName(e.target.value)} />

                    <div>
                        <button type="button" onClick={editData}>Salvar</button>
                    </div>
                </DescriptionsAndCategoryBg>

                <ImgInputButtonAndMessageBg>
                    <img src={image} title="imagem Produto" alt="Imagem Produto" width={280} />
                    <label>Escolher arquivo
                        <input type="file" onChange={(event) => previewImage(event)} />
                    </label>

                    <div>
                        <button type="button" onClick={changeAvatar}><BsCheck2All /></button>
                        {resultImage && <p>Sua imagem foi alterada.</p>}
                    </div>
                </ImgInputButtonAndMessageBg>
            </Content>
        </Container>
    )
}