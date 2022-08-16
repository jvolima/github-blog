import styled from 'styled-components'

export const UserCardContainer = styled.div`
  width: 100%;
  height: 13.25rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
`

export const AvatarContainer = styled.div`
  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }
`

export const UserInfos = styled.div`
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const NameAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const AdditionalInfos = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
