import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-content: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid #000000;

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

    input {
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