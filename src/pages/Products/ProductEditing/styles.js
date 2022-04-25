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
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    gap: 2rem;

    width: 100%;
    max-width: 1000px;

    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    input {
        width: 100%;

        font-size: 1.2rem;
        padding: 0.5rem;
        margin: 0 0 0.8rem 0;
        border-radius: 0.5rem;

        background: #A9A9A9;
    }

    button {
        width: 15rem;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

        &:hover {
            filter: brightness(0.8);
            transition: .3s;
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
        border-radius: 0.5rem;
    }

    input {
        font-size: 0.8rem;
    }


    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
            width: 3rem;
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