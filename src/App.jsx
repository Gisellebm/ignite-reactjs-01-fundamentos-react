import { Post } from "./Post";
import './global.css';
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header/>
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


