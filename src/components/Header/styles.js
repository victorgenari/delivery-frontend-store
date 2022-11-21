import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    top: 0;
    position: fixed;
    z-index: 100;

    background: #FAFAFA;
    border-bottom: 2px solid #A9A9A9;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1400px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.8rem 0;
    background: #FAFAFA;
`

export const CompanyLogoBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
        font-size: 0.8rem;
        user-select: none;
    }

    @media (max-width: 940px) {
        display: none;
    }
`

export const BikeLine = styled.div`
    width: 100%;
    max-width: 1.6rem;
    height: 1.7px;

    margin: -0.2rem 0 0 0;
    background: #708090;
`

export const MenuList = styled.div`
    display: flex;
    gap: 1.5rem;

    button {
        font-size: 1rem;
    }

    a, button {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        border-radius: 0;
        border-bottom: 1px solid transparent;
        padding: 0.5rem;

        color: rgb(0, 0, 0);
        background: transparent;

        &:hover {
            transition: .3s;
            border-bottom: 1px solid #808080;
        }
    }

    @media (max-width: 785px) {
        display: none;
    }
`

export const ShoppingCartAndButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 785px) {
        width: 100%;

        justify-content: space-evenly;
        gap: 0;
    }
`

export const MenuShoppingCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 0.8rem;
            font-weight: 600;
            text-align: end;
        }
    }

    img {
        width: 100%;
        max-width: 2.5rem;
    }
`

export const LoginButtons = styled.div`
    button, a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        width: 8rem;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

        background: rgba(242, 38,19, 0.4);

        &:hover {
            transition: .3s;
            cursor: pointer;
            filter: brightness(0.8);
            background: rgba(242, 38,19, 0.2);
        }

        &.login {
            background: rgba(147, 250,165, 1);

            &:hover {
                transition: .3s;
                cursor: pointer;
                filter: brightness(0.8);
                background: rgba(147, 250,165, 0.2);
            }
        }
    }
`