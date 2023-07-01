import styles from './EmptyTasks.module.css';

import clip from '../assets/clipboard.svg';

export function EmptyTasks() {
    return (
        <div className={styles.emptyTasks}>
            <img src={clip}/>
            <h1>You still don't have any task</h1>
            <span>Create a task and organize your to-do items</span>
        </div>
    );
}