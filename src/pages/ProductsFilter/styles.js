import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 7rem 0 0 0;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    width: 100%;
    max-width: 1100px;

    padding: 0 1rem;
    margin: 2rem 0 3rem 0;

    @media (max-width: 975px) {
        flex-direction: column;
    }
`

export const ImgAndInputsearchAndDeliveryDetails = styled.div`
    padding: 0 1rem;
`

export const BgImgTop = styled.div`
    width: 100%;
    max-width: 1100px;

    img {
        width: 100%;
    }
`

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
    max-width: 10rem;

    @media (max-width: 975px) {
        display: none;
    }
`

export const MapCategoryDiv = styled.div`
    a {
        padding: 0.2rem 0.5rem;
        border-bottom: 2px solid #FAFAFA;
        color: #4F4F4F;

        &:hover {
            transition: .3s;
            color: #000000;
            border-bottom: 2px solid #A9A9A9;
        }
    }
`

export const MobileArrowReturn = styled.div`
    display: none;

    @media (max-width: 975px) {
        display: flex;
    }
`

export const MobileSideBar = styled.div`
    width: 100%;
    max-width: 1100px;
    
    display: none;

    overflow: hidden;
    overflow-x: scroll;

    border-radius: 0.5rem;

    @media (max-width: 975px) {
        display: flex;
        gap: 1rem;
    }
`

export const MapCategoryMobileDiv = styled.div`
    a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        min-width: 10rem;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

        color: #4F4F4F;
        border: 2px solid #FAFAFA;

        &:hover {
            transition: .3s;
            color: #000000;
            border: 2px solid #A9A9A9;
        }
    }
`

export const BgEndPoint = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`

export const BgCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 795px) {
        grid-template-columns: 1fr;
    }
`

export const BgCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #FAFAFA;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.05);

    &:hover {
        filter: brightness(0.8);
        transition: .3s;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 750px) {
        justify-content: space-between;
    }
`

export const ProductInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        font-weight: 600;
    }

    p {
        font-size: 0.9rem;
        margin: 0.8rem 0 0.8rem 0;
    }

    h4 {
        font-size: 0.9rem;
    }

    h5 {
        display: flex;
        align-items: center;

        font-size: 1rem;
        margin-top: -0.3rem;
    }

    button {
        display: flex;

        padding: 0.5rem;
        border-radius: 50%;

        
        border: 1px solid #FAFAFA;
        background: transparent;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`

export const ProductImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 8rem;
        height: 8rem;

        border-radius: 0.5rem;
    }
`