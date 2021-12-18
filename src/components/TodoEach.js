import React, {useState} from 'react'

export default function TodoEach({data, deleteTodo}) {
    const [completed, setCompleted] = useState(data.completed || false)
    return (
        <li className="list-group-item p-3 m-2 d-flex" style={{background: data.priority}}>
            <input type="checkbox" className='form-check me-2' checked={completed}
                onChange={() => setCompleted(curr => !curr)} />
            <h6 className={`m-0 ${completed && 'strike-through'}`}>{data.text}</h6>
            {completed && (
                <button onClick={() => deleteTodo(data.id)} className='btn btn-danger ms-2'>Delete</button>
            )}
        </li>
    )
}
