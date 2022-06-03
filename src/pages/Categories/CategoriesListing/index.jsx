import api from "../../../services/api"
import { useEffect, useState } from "react"
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { CategoryAndButtons, CategoryImage, Container, Content, FisrtContainer, TitleCategoryFirstContainer } from "./styles"


export function CategoriesListing() {
    const [categories, setCategories] = useState()

    const [categoryRemoved, setCategoryRemoved] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        api.get('/categories').then(response => {
            if (response.status === 200) {
                setCategories(response.data.docs)
            }
        })
    }, [categoryRemoved])

    function handleEdit(id) {
        navigate(`/category-editing/${id}`)
    }

    async function handleDelete(id) {

        await api.delete(`/categories/${id}/delete`).then(response => {
            if (response.status === 200) {
                alert('A categoria selecionada foi deletada.')
                setCategoryRemoved(true)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <FisrtContainer>
            <TitleCategoryFirstContainer>
                <h1>Categorias</h1>
            </TitleCategoryFirstContainer>

            {categories && categories.map((category) => {
                return (
                    <Container key={category.id}>
                        <Content>

                            <CategoryAndButtons>
                                <div>
                                    <span>{category.name}</span>
                                </div>

                                <div>
                                    <button type="button" onClick={() => handleEdit(category.id)}>
                                        <RiEdit2Line title="Editar" size={30} />
                                    </button>
                                    <button type="button" onClick={() => handleDelete(category.id)}>
                                        <RiDeleteBin2Line title="Excluir" size={30} />
                                    </button>
                                </div>
                            </CategoryAndButtons>

                            <CategoryImage>
                                <img src={category.picture} alt="Imagem categoria" />
                            </CategoryImage>

                        </Content>
                    </Container>
                )
            })}
        </FisrtContainer>
    )
}