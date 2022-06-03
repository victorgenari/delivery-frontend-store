import styled from 'styled-components'

export const InputSearch = styled.div`
    display: flex;
    gap: 0.3rem;

    width: 100%;
    max-width: 1100px;

    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #FAFAFA;

    &:hover {
        transition: .3s;
        border: 2px solid #A9A9A9;
    }

    i {
        margin-top: 10px;
    }

    input {
        width: 100%;
        font-size: 1.5rem;
        background: transparent;
        border-bottom: 1px solid #000000;
    }
`