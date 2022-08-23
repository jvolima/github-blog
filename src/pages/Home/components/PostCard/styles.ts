import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      width: 60%;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    time {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  .markdown-paragraph {
    margin-top: 1.25rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
