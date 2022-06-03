import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
`

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 615px) {
        grid-template-columns: 1fr;
    }
`

export const DescriptionsAndCategoryBg = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin: 0 0 1rem 0;
    }

    p {
        margin: 0 0 0.5rem 0;
    }

    a {
        width: 100%;
        max-width: 2rem;

        transition: .3s;
        transform: translateY(0);

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }

    select {
        width: 100%;

        font-size: 1.2rem;
        padding: 0.5rem;
        margin: 0 0 0.8rem 0;
        border-radius: 0.5rem;

        background: #A9A9A9;
    }

    button {
        width: 100%;
        max-width: 15rem;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

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
            filter: brightness(0.8);
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`

export const ImgInputButtonAndMessageBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        max-width: 15rem;
    }

    label {
        width: 100%;
        max-width: 18rem;

        display: flex;
        justify-content: center;

        font-size: 1.1rem;
        font-weight: 600;
        margin: 0.5rem 0 1rem 0;
        padding: 0.3rem 0;
        border-radius: 0.5rem;

        background: #A9A9A9;

        &:hover {
            transition: .3s;
            cursor: pointer;
            background: rgba(0, 0, 0, 0.1);
        }
    }

    input {
        display: none;
    }

    button {
        width: 100%;
        max-width: 15rem;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

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
            filter: brightness(0.8);
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`