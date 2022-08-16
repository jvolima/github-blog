import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PostsContext } from '../../contexts/PostsContext'
import { api } from '../../lib/axios'
import { UserCard } from './components/UserCard'
import { HomeContainer } from './styles'

interface User {
  name: string
  login: string
  bio: string
  followers: number
  avatar_url: string
  html_url: string
  company: string
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)

  const { posts, fetchPosts } = useContext(PostsContext)

  console.log(posts)

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('users/jvolima')

      setUser(response.data)
    }

    loadUser()
  }, [])

  return (
    <HomeContainer>
      <UserCard
        name={user.name}
        bio={user.bio}
        avatar_url={user.avatar_url}
        company={user.company}
        followers={user.followers}
        html_url={user.html_url}
        login={user.login}
      />
    </HomeContainer>
  )
}
