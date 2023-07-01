import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TasksContainer } from "./components/TasksContainer";
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Input />
      <TasksContainer />
    </div>
    
  )
}

export default App

