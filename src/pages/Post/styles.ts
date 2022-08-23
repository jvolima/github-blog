import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: -5rem auto 0;
  padding: 0 1rem;
`

export const Content = styled.div`
  padding: 2.5rem 2rem;

  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 2rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
