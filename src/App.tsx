import { useEffect, useState } from "react"
import Todo from "./components/todo/Todo"

//12.22 error .map is not a function


interface DataTodo{
 todos:{ completed: boolean,  // los datos vienen del endpoint
  id: number,
  todo: string,
  useId: number}[];
  total: number;
  skip: number;
  limit: number;
}


const App: React.FC = () => {  //REACT FUNCIONAL COMPONENT

const [todoList, setTodoList] = useState<DataTodo>();

useEffect(()=>{
  const getTodos = async () => {
    const data = await fetch('https://dummyjson.com/todos')
    const result = await data.json()
    setTodoList(result)
  };
  getTodos();
}, []);

  return (
    <div>{todoList?.todos.map((todo)=> {
      return <Todo key={todo.id}
       todo={todo.todo}
        status={todo.completed ? 'active' : 'inactive'} />
    })
    }</div>
  )
}

export default App