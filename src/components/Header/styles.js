import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    background: #fafafa;
`

export const Content = styled.div`
    width: 65%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #fafafa;
`

export const Company = styled.div`
    img {
        width: 2.3rem;
        height: 2.3rem;
    }
`

export const MenuList = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const LupaInputAndCart = styled.div`
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

export const BgLupaAndInput = styled.div`
    width: 24rem;
`

export const LupaAndInput = styled.div`
    display: flex;
    align-items: center;

    width: 2.3rem;
    overflow: hidden;
    padding: 0 0 0 0.3rem;
    gap: 0.3rem;

    border-radius: 0.5rem;
    border: 2px solid #808080;

    &:hover {
        width: 24rem;
        transition: all 0.7s;
    }

    i {
        font-size: 1.6rem;
        margin-top: 9px;
    }
`

export const IconAndBtnLogin = styled.div`
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    gap: 0.3rem;

    color: #FFFFFF;
    background: #708090;

    &:hover {
        cursor: pointer;
        transition: .3s;
        filter: brightness(0.9);
    }

    i {
        margin-top: 5px;
    }

    button {
        font-size: 1.1rem;
        color: #FFFFFF;
        background: transparent;
    }
`