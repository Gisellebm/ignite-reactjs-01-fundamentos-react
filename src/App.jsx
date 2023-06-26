import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author='Diego Fernandes'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      />
      <Post
        author='Gabriel Buzzi'
        content='Um novo post com conteúdo'
      />
    </div>
  )
}


