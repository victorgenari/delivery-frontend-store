import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 785px) {
        padding: 1rem;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    h1 {
        text-align: center;
        margin: 0 0 2rem 0;
    }

    div {
        display: flex;
        align-items: center;

        width: 100%;

        padding: 0.5rem;
        margin: 0 0 1rem 0;
        border-radius: 0.5rem;
        background: rgba(239, 239, 239);

        input {
            width: 100%;
            font-size: 1.2rem;
            padding: 0.5rem;
            background: transparent;
        }
    }

    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        @media (max-width: 325px) {
            flex-direction: column;
            gap: 1rem;
        }

        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    button {
        width: 8rem;
        font-size: 1.2rem;
        padding: 0.3rem 0;
        border: 1px solid transparent;
        border-radius: 0.5rem;

        &:hover {
            cursor: pointer;
            transition: .3s;
            border: 1px solid rgba(239, 239, 239);
            background: transparent;
        }

        @media (max-width: 325px) {
            margin: 1rem 0 0 0;
        }
    }

    p {
        margin: 1rem 0 0 0;

        a {
            &:hover {
                text-decoration: underline;
            }   
        }
    }
`

export const SocialMedias = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 1.5rem;
    margin: 1rem 0 0 0;
    background: transparent;
`