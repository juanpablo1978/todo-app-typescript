
type TodoStatus = 'active' | 'inactive' | 'open' | 'close'

interface TodoProps{
    todo: string,
    status?: TodoStatus,

}


const Todo: React.FC<TodoProps> = ({todo, status}) => {

  return (
    <>
    <div>{todo}</div>
    <h2>{status}</h2>
    <hr />

    </>
  )
}

export default Todo