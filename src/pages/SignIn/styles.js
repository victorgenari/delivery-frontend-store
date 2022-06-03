import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
`

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 5px 5px 5px #A9A9A9;
`

export const CompanyLogoBg = styled.div`
    margin: 0 0 3rem 0;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        max-width: 5rem;

        i {
            font-size: 0.8rem;
        }
    }
`

export const BikeLine = styled.div`
    width: 100%;
    max-width: 1.6rem;
    height: 1.7px;

    margin: -1.3rem 0 0 1.7rem;
    background: #708090;
`

export const TitleDescriptions = styled.div`
    margin: 0 0 1rem 0;
`

export const InputsBg = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
    padding: 0 0 0 0.5rem;
    border-radius: 0.5rem;
    background: #FAFAFA;

    input {
        width: 100%;

        font-size: 1.2rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: transparent;
    }
`

export const LoginOrForgot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;

    margin: 1rem 0;

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

    a {
        &:hover {
            transition: .3s;
            color: blue;
            text-decoration: underline;
        }
    }
`

export const DontHaveAccountOrCreateLogin = styled.div`
    display: flex;
    justify-content: center;

    a {
        font-weight: 600;

        &:hover {
            transition: .3s;
            text-decoration: underline;
            color: blue;
        }
    }
`

export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    margin: 1rem 0 2rem 0;

    a {
        transition: .3s;
        transform: translateY(0);

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }
`

export const OurPolicies = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;

    a {
        &:hover {
            text-decoration: underline;
            color: blue;
        }
    }

    @media (max-width: 750px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 650px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 395px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`