import { useContext, useEffect, useState } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { SearchBox } from './components/SearchBox'
import { UserCard } from './components/UserCard'
import { HomeContainer, Posts, Publications } from './styles'

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

      <Publications>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </Publications>

      <SearchBox />

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
