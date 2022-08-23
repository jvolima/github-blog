/* eslint-disable camelcase */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { CardContainer, PostDetails } from './styles'

interface CardProps {
  title: string
  html_url: string
  user: {
    login: string
  }
  comments: number
  created_at: Date
}

export function Card({
  title,
  html_url,
  user,
  comments,
  created_at,
}: CardProps) {
  const date = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <CardContainer>
      <header>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={html_url} target="_blank" rel="noreferrer">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <h1>{title}</h1>

      <PostDetails>
        <div>
          <FontAwesomeIcon icon={faGithub} /> {user.login}
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} /> {date}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> {comments} comentários
        </div>
      </PostDetails>
    </CardContainer>
  )
}
