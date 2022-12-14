/* eslint-disable camelcase */
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  AdditionalInfos,
  AvatarContainer,
  NameAndLink,
  UserCardContainer,
  UserInfos,
} from './styles'

interface User {
  name: string
  login: string
  bio: string
  followers: number
  avatar_url: string
  html_url: string
  company: string
}

interface UserCardProps {
  data: User
}

export function UserCard({ data }: UserCardProps) {
  const { avatar_url, name, html_url, bio, login, company, followers } = data

  return (
    <UserCardContainer>
      <AvatarContainer>
        <img src={avatar_url} alt="" />
      </AvatarContainer>
      <UserInfos>
        <NameAndLink>
          <h1>{name}</h1>
          <a href={html_url} target="_blank" rel="noreferrer">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameAndLink>
        <p>{bio}</p>
        <AdditionalInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} /> {login}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} /> {company}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} /> {followers} seguidores
          </div>
        </AdditionalInfos>
      </UserInfos>
    </UserCardContainer>
  )
}
