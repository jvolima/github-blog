import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { PostsContext } from '../../contexts/PostsContext'
import { Card } from './components/Card'
import { Content, PostContainer } from './styles'

export function Post() {
  const { selectedPost } = useContext(PostsContext)

  return (
    <PostContainer>
      <Card
        title={selectedPost.title}
        html_url={selectedPost.html_url}
        comments={selectedPost.comments}
        created_at={selectedPost.created_at}
        user={{
          login: selectedPost.user.login,
        }}
      />

      <Content>
        <ReactMarkdown>{selectedPost.body}</ReactMarkdown>
      </Content>
    </PostContainer>
  )
}
