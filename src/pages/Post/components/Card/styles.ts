import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      border-bottom: 1px solid transparent;

      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme.blue};

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostDetails = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
