import styled from 'styled-components'

export const SearchBoxContainer = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme['base-input']};
  border: 0;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
