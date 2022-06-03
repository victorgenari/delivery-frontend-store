import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    padding: 0 1rem;

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
    max-width: 1000px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    gap: 2rem;

    @media (max-width: 625px) {
        grid-template-columns: 1fr;

        div {
            div {
                display: flex;
                justify-content: center;
            }
        }
    }

    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    input, select {
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

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img {
        width: 100%;
        max-width: 22rem;

        border-radius: 0.5rem;
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

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
            display: flex;

            width: 100%;

            font-size: 1.1rem;
            padding: 0.5rem 2rem;
            border-radius: 0.5rem;

            &:hover {
                filter: brightness(0.8);
                transition: .3s;
            }
        }
    }
`

export const Loading = styled.div`
    width: 2rem;
    height: 1.5rem;
    position: relative;

    ::before,
    ::after {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        mix-blend-mode: multiply;
        animation: rotate 1.5s infinite;
    }

    ::before {
        background: #000000;
    }

    ::after {
        background: #A9A9A9;
        animation-delay: .3s;
    }

    @keyframes rotate {
        0%,100% {
            left: 4rem;
        }
        25% {
            transform: scale(.3);
        }
        50% {
            left: 0;
        }
        75% {
            transform: scale(1);
        }
    }
`