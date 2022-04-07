import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 3rem;
  border-top: 1px solid #dadada;
  background-color: #fafafa;
`

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  gap: 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #fafafa;

  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 612px) {
    grid-template-columns: 1fr;
  }
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const BgSocialMedias = styled.div`
  display: flex;
  gap: 3rem;
`

export const FbAndTT = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.5rem;
  gap: 2.3rem;

  @media (max-width: 322px) {
    display: none;
  }
`

export const DivInsta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  font-size: 1.5rem;
  margin-top: -4px;

  @media (max-width: 322px) {
    display: none;
  }
`

export const IconAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const InstaImgs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  img {
    width: 4rem;
    height: 3rem;
  }
`

export const Localization = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const IconAndAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  i {
    font-size: 1.1rem;
    margin-top: 4px;
  }
`

export const Privacity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    &:hover {
      text-decoration: underline;
      color: #000000;
    }
  }
`