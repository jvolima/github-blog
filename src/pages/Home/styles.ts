import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: -5rem auto 0;
`

export const Posts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  gap: 2rem;
`
