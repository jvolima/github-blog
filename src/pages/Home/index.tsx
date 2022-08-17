import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PostsContext } from '../../contexts/PostsContext'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { UserCard } from './components/UserCard'
import { HomeContainer, Posts } from './styles'

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

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('users/jvolima')

      setUser(response.data)
    }

    loadUser()
  }, [])

  return (
    <HomeContainer>
      <UserCard data={user} />

      <Posts>
        {posts.map((post) => (
          <PostCard
            key={String(post.created_at)}
            title={post.title}
            created_at={post.created_at}
            body={post.body}
          />
        ))}
      </Posts>
    </HomeContainer>
  )
}
