import { Post } from "./Post";
import './global.css';
import styles from './App.module.css';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          />
          <Post
            author='Gabriel Buzzi'
            content='Um novo post com conteúdo'
          />
        </main>
      </div>

    </div>
  )
}


