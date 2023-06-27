import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
export function Sidebar() {
    return (
       <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load" 
        />

        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/Gisellebm.png" />

            <strong>Giselle Brasil</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
       </aside> 
    );
}