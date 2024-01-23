import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
]


function App() {
  const queryClient = useQueryClient()
  const postsQuery =   useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS])
    // queryFn: () => Promise.reject('error msg')
  })
  if (postsQuery.isLoading) return <h2>Loading .....</h2>
  if (postsQuery.isError) return <h2>Error...<pre>{ JSON.stringify(postsQuery.error) }</pre></h2>
  
  const newPost = useMutation({
    mutationFn: title => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title: 'new Post'})
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })

  return (
    <>
      <h2>React Query</h2>
      {postsQuery.data.map(post => (
        <div key={post.id}>{ post.title }</div>
      ))}
      <button disabled={newPost.isLoading} onClick={() => newPost.mutate('New Post')}>New Post Add</button>
    </>
  )
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App
