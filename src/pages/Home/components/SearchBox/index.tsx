import { useContext, useEffect, useState } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { SearchBoxContainer } from './styles'

export function SearchBox() {
  const [text, setText] = useState('')
  const { fetchPosts } = useContext(PostsContext)

  useEffect(() => {
    fetchPosts(text)
  }, [text])

  return (
    <SearchBoxContainer
      placeholder="Buscar conteúdo"
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  )
}
