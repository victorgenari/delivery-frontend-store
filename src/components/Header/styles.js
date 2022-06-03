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

    width: 100%;
    max-width: 5rem;

    i {
        font-size: 0.8rem;
        user-select: none;
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

    a, button {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        border-radius: 0;
        border-bottom: 1px solid transparent;
        padding: 0.5rem;

        color: #000000;
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

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`



export const LoginButton = styled.div`
    width: 100%;
    max-width: 10rem;

    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.1rem;
        padding: 0.3rem 1.4rem;
        border-radius: 0.5rem;
        border: 2px solid #A9A9A9;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background: #32CD32;
            transition: .3s linear;
            z-index: -1;
        }

        &:hover {
            filter: brightness(0.8);
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`

export const LogoutButton = styled.div`
    width: 100%;
    max-width: 10rem;

    button {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.1rem;
        padding: 0.3rem 1.4rem;
        border-radius: 0.5rem;
        border: 2px solid transparent;
        background: #B22222;
        color: #FFFFFF;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background: #FA8072;
            transition: .3s linear;
            z-index: -1;
        }

        &:hover {
            filter: brightness(0.8);
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`