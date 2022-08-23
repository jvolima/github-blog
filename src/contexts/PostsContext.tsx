import { createContext, ReactNode, useEffect, useState } from 'react'
import slugify from 'slugify'
import { api } from '../lib/axios'

interface Post {
  title: string
  slug: string
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

    const dataPosts = response.data.items

    dataPosts.forEach((post: Post) => {
      post.slug = slugify(post.title, {
        lower: true,
        trim: true,
      })
    })

    console.log(dataPosts)

    setPosts(dataPosts)
    setFilteredPosts(dataPosts)
  }

  function filterPosts(query: string) {
    setFilteredPosts([])

    posts.forEach((post) => {
      if (post.body.includes(query)) {
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
