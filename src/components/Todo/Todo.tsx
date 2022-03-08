import "./Todo.css"
interface ITask{
    todo:string,
    deadline?:number // ? question mark mean its optional. 
}
interface Props{
    Stodo: ITask,
    deleteTodo(todoToDelete:string):void
}
const Todo = ({Stodo,deleteTodo}:Props) => {
    return (
        <div className="todo-container">
            <h4 style={{padding:"0 8px"}}> {Stodo.todo}</h4>
            <p style={{padding:"0 8px",textAlign:"left"}}>
            <small> Deadline {Stodo.deadline} days </small>
            </p>
            <button >Completed</button>
            <button onClick={()=>deleteTodo(Stodo.todo)} >Remove</button>
          
        </div>
    );
};

export default Todo;