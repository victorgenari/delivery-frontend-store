import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    background: #FAFAFA;
    border-bottom: 2px solid #A9A9A9;
`

export const Content = styled.div`
    width: 65%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 1.1rem 0;
    background: #FAFAFA;

    @media (max-width: 985px) {
        width: 100%;
    }
`

export const Company = styled.div`
    img {
        width: 2.3rem;
        height: 2.3rem;
    }

    @media (max-width: 572px) {
        display: none;
    }
`

export const MenuList = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        border-bottom: 1px solid transparent;
        padding: 0.5rem;

        &:hover {
            transition: .3s;
            border-bottom: 1px solid #808080;
        }
    }

    @media (max-width: 525px) {
        display: none;
    }
`

export const Cart = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    input {
        width: 100%;
        font-size: 1.1rem;
        padding: 0 0.5rem 0 0;
        border-radius: 0.3rem;
        background: transparent;
    }

    i {
        font-size: 1.3rem;
        margin-top: 4px;
    }
`

export const IconAndBtnLogin = styled.div`
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    padding: 0.2rem 1.5rem;
    border-radius: 0.5rem;
    gap: 0.3rem;

    color: #FFFFFF;
    background: #2E8B57;

    &:hover {
        cursor: pointer;
        transition: .3s;
        filter: brightness(0.9);
    }

    i {
        margin-top: 5px;
    }

    a {
        font-size: 1.1rem;
        color: #FFFFFF;
        background: transparent;
    }
`