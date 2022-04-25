import api from "../../../services/api"
import { useNavigate, useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"


export function CategoriesEditing() {
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const routeParams = useParams()
    const navigate = useNavigate()

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA2MzY4MzgsImV4cCI6MTY1MDcyMzIzOH0.wNvSVwXG--sN4jLfo4iI4uIbeuDHovcJmCzNr8z1tXY"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    useEffect(() => {
        api.get(`categories/${routeParams.id}`, config).then(response => {
            if (response.status === 200) {
                setCategory(response.data.data)
            }
        })
    }, [])

    const categoryChanges = {
        name: name,
    }

    async function editData() {
        await api.patch(`categories/${routeParams.id}`, categoryChanges, config).then(response => {
            // se a resposta for OK, ele irá chamar o navigate para outra URL
            if (response.status === 200) {
                alert('Sua categoria foi alterada.')
                navigate(`/categories-listing`)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <div>
            <h1>Alterações</h1>
            <p>Caso altere alguma categoria, não esqueça de salvá-la.</p>
            <Link to="/categories-listing"><MdKeyboardArrowLeft /></Link>

            <input type="text" name="name" defaultValue={category && category.name} onChange={(e) => setName(e.target.value)} />

            <button type="button" onClick={editData}>Salvar</button>
        </div>
    )
}