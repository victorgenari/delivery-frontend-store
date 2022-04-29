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
`

export const ReturnArrow = styled.div`
    font-size: 1.8rem;
    
    transition: .3s;
    transform: translateY(0);

    &:hover {
        transition: .5s;
        transform: translateY(-6px);
    }
`

export const InputsBg = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 1.2rem;
    padding: 0 0 0 0.5rem;
    margin: 0 0 1rem 0;
    border-radius: 0.5rem;
    background: #FAFAFA;

    input {
        width: 100%;

        font-size: 1.2rem;
        padding: 0.5rem;
        background: transparent;
    }
`

export const EnterOrForgotPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (max-width: 315px) {
        flex-direction: column;

        a {
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(239, 239, 239);
        }
    }

    a {
        &:hover {
            text-decoration: underline;
            color: blue;
        }
    }

    button {
        font-size: 1.2rem;
        padding: 0.3rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(239, 239, 239);

        &:hover {
            background: transparent;
            border: 1px solid rgba(239, 239, 239);
            transition: .3s;
        }
    }
`

export const CreateAnAccountQuestion = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3rem;

    width: 100%;

    p {
        padding: 0.3rem 1rem;
        margin: 1rem 0 0 0;
        border-radius: 0.5rem;
        border: 1px solid #FAFAFA;
    }

    a {
        &:hover {
            text-decoration: underline;
            color: blue;
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

    a {
        transition: .3s;
        transform: translateY(0);

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }
`