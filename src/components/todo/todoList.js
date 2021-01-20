import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormTodo from "./formTodo"
import Task from "./task"
import { cleanData } from "../../redux/actions/todoActions"

const TodoList = () => {
  const tasks = useSelector(state => state.todos.tasks)

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(cleanData())
  }, [])

  return (
    <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`,
    }}>
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
