import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addTask, updateTask,setCordinate } from "../../redux/actions/todoActions"
import { useSelector } from "react-redux"
import shortid from "shortid"

const initialState = {
  id: "",
  title: "",
  state: true,
  createdAt: new Date(),
  updates: [],
}

const FormTodo = () => {
  const { taskSelected } = useSelector(state => state.todos)

  const [error, setError] = useState(false)

  const {cordinate} =useSelector(state=>state.todos)

  //local state for the form
  const [task, setTask] = useState({
    id: "",
    title: "",
    state: true,
    createdAt: new Date(),
    updates: [],
  })

  const dispatch = useDispatch()

  useEffect(() => {
    //get the location of the user
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      dispatch(setCordinate({ lat, lng }))
    })
  }, [])

  useEffect(() => {
    if (taskSelected) {
      setTask(taskSelected)
    } else {
      setTask(initialState)
    }
  }, [taskSelected])


  //add or update a task
  const handleSubmit = e => {
    e.preventDefault()

    //validate the input
    if (task.title.trim() === "") {
      setError(true)
      return
    }

    if (!taskSelected) {
      //call the action for add a new task
      dispatch(addTask({ ...task, id: shortid.generate(), cordinate }))
    } else {

    //call the action for update a task
      let updTask = {}
      if (taskSelected.updates.includes(cordinate)) {
        updTask = { ...taskSelected, title: task.title }
      } else {
        updTask = {
          ...taskSelected,
          title: task.title,
          updates: [...taskSelected.updates, cordinate],
        }
      }
      dispatch(updateTask(updTask))
    }

    //reset the form
    setTask(initialState)

    setError(false)
  }

  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest text-center">TODO List Serempre</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            name="title"
            value={task.title}
            onChange={e =>
              setTask({ ...task, [e.target.name]: e.target.value })
            }
          />
          <button
            className="flex-no-shrink p-2 px-3 border-2 rounded text-white border-gray-900 bg-gray-900 transform hover:scale-110"
            type="submit"
          >
            {!taskSelected ? (
              <>
                <i className="fa fa-plus"></i> Add
              </>
            ) : (
              <>
                <i className="fa fa-pencil"></i> Update
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm">The title is obligatory</p>
        )}
      </form>
    </div>
  )
}

export default FormTodo
