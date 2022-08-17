/* eslint-disable camelcase */
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  created_at: Date
  body: string
}

export function PostCard({ title, created_at, body }: PostCardProps) {
  const date = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer>
      <div>
        <h1>{title}</h1>
        <time>{date}</time>
      </div>
      <p>{body}</p>
    </PostCardContainer>
  )
}
