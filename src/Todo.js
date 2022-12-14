import React, { useRef } from 'react'

export default function Todo(props) {
    const { todo, toggleTodo, updateToDoName, handleDeleteTodo, editing } = props;
    const todoNameRef = useRef();

    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    function deleteTodo() {
        handleDeleteTodo(todo.id);
    }

    function handleNameUpdate() {
        if (todoNameRef?.current?.value && todoNameRef.current.value !== "") {
            updateToDoName(todo.id, todoNameRef.current.value);
        }
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" checked={todo.complete} onChange={handleTodoClick} aria-label="Checkbox for following text input" />
            </div>
            <input type="text" className="form-control" aria-label="Text input with checkbox" defaultValue={todo.name} onBlur={handleNameUpdate} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.target.blur();
                }
            }} ref={todoNameRef} />
            {editing ?
                <div className="input-group-text">
                    <button className='btn btn-danger' onClick={deleteTodo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                </div>
                : null}
        </div>
    )
}
