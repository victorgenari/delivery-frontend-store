// Icons
import { BiSearchAlt } from 'react-icons/bi'

// CSS
import { InputSearch } from "./styles"


export function InputSearchPages() {
    return (
        <InputSearch>
            <i><BiSearchAlt /></i>
            <input type="search" placeholder="Pesquise um produto" />
        </InputSearch>
    )
}