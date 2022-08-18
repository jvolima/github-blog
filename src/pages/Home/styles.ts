import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: -5rem auto 0;
  padding: 0 1rem;
`

export const Publications = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Posts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  gap: 2rem;
`
