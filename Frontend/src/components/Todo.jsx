import React from 'react'

const Todo = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Not Completed"}</button>
                </div>

            })}
        </>
    )
}

export default Todo
