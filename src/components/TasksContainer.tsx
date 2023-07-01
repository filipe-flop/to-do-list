import { EmptyTasks } from "./EmptyTasks";
import { Task } from "./Task";
import { TasksHeader } from "./TasksHeader";

export function TasksContainer() {
    return (
        <div>
            <TasksHeader />
            <EmptyTasks />
        </div>
    );
}