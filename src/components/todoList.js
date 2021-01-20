import React from "react"
import { useSelector } from "react-redux"
import FormTodo from "./formTodo"
import Task from "./task"

const TodoList = () => {
  const tasks = useSelector(state => state.todos.tasks)

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center flex-wrap">
        <div className="bg-white rounded shadow lg:shadow-2xl p-6 my-4 w-full">
          {/* form by todo */}
          <FormTodo />
          <div>
            {tasks.map((task,index) => (
              <Task key={index} task={task}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
