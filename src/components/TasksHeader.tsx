import styles from './TasksHeader.module.css'

export function TasksHeader() {
    return (
        <div className={styles.tasksHeader}>
            <div className={styles.createdTasks}>
                Created Tasks
                <div>0</div>
            </div>
            <div className={styles.concludedTasks}>
                Concluded
                <div>0</div>
            </div>
        </div>
    );
}