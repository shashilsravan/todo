import React, {useState} from 'react'
import {Container} from 'reactstrap'
import { sampleTasks } from './tasksList'
import TodoEach from './TodoEach'

export default function TodoList() {
    const [tasks, setTasks] = useState(sampleTasks)
    const [todoText, setTodoText] = useState('')
    const [todoColor, setTodoColor] = useState('pink')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([
            ...tasks, {id: Date.now(), text: todoText, completed: false, priority: todoColor}
        ])
        setTodoColor('pink')
        setTodoText("")
        setMessage('Todo added successfully')
        setTimeout(() => {
            setMessage("")
        }, 5000);
    }

    const deleteTodo = (id) => {
        let tempArr = []
        tasks.forEach(each => {
            if (each.id !== id){
                tempArr.push(each)
            }
        })
        setTasks(tempArr)
    }
    return (
        <Container>
            {message !== "" && (
                <div className="alert alert-success mt-5" role="alert">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} className='border border-primary p-4 mt-5'>
                <div className='my-3'>
                    <label> Text: </label>
                    <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} 
                        className='form-control' required />
                </div>
                <div className='my-3'>
                    <label> Color: </label>
                    <select defaultValue={todoColor} onChange={(e) => setTodoColor(e.target.value)}
                        className='form-control'>
                        <option value="pink">
                            Pink
                        </option>
                        <option value="yellow">
                            Yellow 
                        </option>
                        <option value="orange">
                            Orange 
                        </option>
                    </select>
                </div>
                <button type="submit" className='btn btn-success'>
                    Add todo
                </button>
            </form>
            <div className='mt-5'>
                <h5>Your Todos:</h5> 

                <ul className='list-group my-2'>
                    {tasks.map(eachTask => (
                        <TodoEach data={eachTask} key={eachTask.id}
                            deleteTodo={deleteTodo} />
                    ))}
                </ul>
            </div>
            
        </Container>
    )
}
