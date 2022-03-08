import { ChangeEvent, useState, FC, useEffect } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css"
const Todos: FC = () => {
    interface ITask {
        todo: string,
        deadline: number,
    }
    const [todo, setTodo] = useState<string>('')
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])
    const [dbTodoList, setDbTodoList] = useState<ITask[]>([])
    localStorage.setItem('todoList', JSON.stringify(todoList))
    useEffect(() => {
        const TodoList = JSON.parse(`${localStorage.getItem('todoList')}`);
        console.log(TodoList);
        setDbTodoList(TodoList)

    }, [])
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        if (e.target.name === "todo") {
            setTodo(value)
        } else {
            if (value >= "0") {

                setDeadline(Number(value))
            }
        }
    }
    const handleOnClick = (): void => {
        if (todo === '' || deadline < 0) return;
        const newTask = {
            todo, deadline
        }
        const updateTodoList = [...todoList, newTask];
        setTodoList(updateTodoList)
        console.log(todoList)
        setTodo('')
        setDeadline(0)
    }
    const DeleteTodo = (todoName: string): void => {
        setTodoList(todoList.filter(todo => todo.todo !== todoName))

    }
    console.log(dbTodoList);

    return (
        <div className="todos-container">
            <div className="inner-container">
                <div className="input-box">
                    <input type="text" value={todo} placeholder="write todo" name="todo" onChange={handleOnChange} />
                    <input type="number" value={deadline} placeholder="deadline (in days)" name="deadline" onChange={handleOnChange} />
                </div>
                <button onClick={handleOnClick}>Add</button>
            </div>

            <div className="todos-box">
                {dbTodoList != null && (
                    dbTodoList.map((Stodo: ITask, index: number) => (
                        <Todo key={index} Stodo={Stodo} deleteTodo={DeleteTodo} />

                    ))
                )

                }
            </div>
        </div>
    );
};

export default Todos;