import styles from './Input.module.css'

import { PlusCircle } from 'phosphor-react'

export function Input() {
    return (
        <form className={styles.taskForm}>
            <input
                placeholder='Add a new task'
            />

            <button type='submit'>
                <span>Create</span>
                    <PlusCircle size={18} />
            </button>
        </form>
    );
}