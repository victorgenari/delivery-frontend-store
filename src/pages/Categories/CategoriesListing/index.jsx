import api from "../../../services/api"
import { useEffect, useState } from "react"
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"


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
        navigate(`/categories-editing/${id}`)
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA2MzAyMTIsImV4cCI6MTY1MDcxNjYxMn0.1kotU4wKtq5qy-UE9ZzOhJUJQgSD_hALpOUnEMYbR6M"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    async function handleDelete(id) {

        await api.delete(`/categories/${id}`, config).then(response => {
            if (response.status === 200) {
                alert('A categoria selecionada foi deletada.')
                setCategoryRemoved(true)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <>
            {categories && categories.map((category) => {
                return (
                    <div key={category.id}>
                        <span>Categoria: {category.name}</span>
                        <img src={category.picture} alt="Imagem categoria" width={50} />

                        <div>
                            <button type="button" onClick={() => handleEdit(category.id)}><RiEdit2Line title="Editar" /></button>
                            <button type="button" onClick={() => handleDelete(category.id)}><RiDeleteBin2Line title="Excluir" /></button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}