import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Post {
  title: string
  body: string
  created_at: Date
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface PostsContextType {
  posts: Post[]
  fetchPosts: () => Promise<void>
  filterPosts: (query: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  async function fetchPosts() {
    const response = await api.get(
      `search/issues?q=%20repo:jvolima/github-blog`,
    )

    setPosts(response.data.items)
    setFilteredPosts(response.data.items)
  }

  function filterPosts(query: string) {
    setFilteredPosts([])

    posts.forEach((post) => {
      if (post.body.includes(query)) {
        console.log('here')
        setFilteredPosts((oldState) => [...oldState, post])
      }
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{ posts: filteredPosts, fetchPosts, filterPosts }}
    >
      {children}
    </PostsContext.Provider>
  )
}
