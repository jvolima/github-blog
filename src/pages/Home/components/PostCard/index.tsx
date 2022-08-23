/* eslint-disable camelcase */
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import ReactMarkdown from 'react-markdown'

interface PostCardProps {
  id: number
  slug: string
  title: string
  created_at: Date
  body: string
}

export function PostCard({ id, slug, title, created_at, body }: PostCardProps) {
  const { selectPost } = useContext(PostsContext)

  const date = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  function handleSelectPost() {
    selectPost(id)
  }

  return (
    <Link to={`/posts/${slug}`} style={{ textDecoration: 'none' }}>
      <PostCardContainer onClick={handleSelectPost}>
        <div>
          <h1>{title}</h1>
          <time>{date}</time>
        </div>
        <ReactMarkdown className="markdown-paragraph">{body}</ReactMarkdown>
      </PostCardContainer>
    </Link>
  )
}
