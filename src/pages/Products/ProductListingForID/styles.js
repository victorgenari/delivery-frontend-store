import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    padding: 1rem;

    a {
        display: flex;

        width: 2rem;
        font-size: 2rem;
        margin: 0 0 2rem 0;

        transition: .3s;
        transform: translateY(0);

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
`

export const ProductCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 600px;

    padding: 1rem;
    border-radius: 0.5rem;

    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 525px) {
        flex-direction: column;
    }
`

export const ProductDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 525px) {
        margin: 0 0 2rem 1rem;
    }

    div {
        h4 {
            font-weight: 600;
        }
    }
`

export const AddOrRemoveToCart = styled.div`
    display: flex;
    gap: 2rem;

    button {
        display: flex;

        position: relative;
        overflow: hidden;
        z-index: 0;

        border-radius: 50%;
        padding: 0.8rem;

        border: 1px solid transparent;
        background: #FAFAFA;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background: rgba(0, 0, 0, 0.1);
            transition: .3s linear;
            z-index: -1;
        }

        &:hover {
            transition: .2s;
            background: #A9A9A9;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`

export const ProductImage = styled.div`
    display: flex;
    align-items: center;

    img {
            border-radius: 0.5rem;
        }
`