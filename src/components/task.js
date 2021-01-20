import React from "react"
import PropTypes from "prop-types"
import { selectTask,changeState,deleteTask } from "../redux/actions/todoActions"
import { useDispatch } from "react-redux"

const Task = ({task}) => {

const dispatch = useDispatch()


// change el state of one task
const handleState=()=>{
    dispatch(changeState(task.id,!task.state))
}

// select one task for edition
const handleSelect=()=>{
    dispatch(selectTask(task))
}

const handleDelete=()=>{
    dispatch(deleteTask(task.id))
}

  return (
    <div className="sm:flex mb-4 items-center shadow-md p-2 py-4 rounded hover:bg-gray-100 animate__animated animate__backInDown">
      <p className={`w-full text-gray-400 ${task.state? 'text-green-500':'line-through'} `}>
        {task.title}
      </p>


      {
          task.state?
        //   {/* ok button */}
      <button onClick={handleState} className="flex-no-shrink p-2 ml-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
        <i className="fa fa-thumbs-up"></i>
      </button>
    :
    //   {/* not ok button */}
      <button 
      className="flex-no-shrink p-2 ml-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-400"
      onClick={handleState}
      >
        <i className="fa fa-thumbs-down"></i>
      </button>

    }
      {/* edit button */}
      <button 
      onClick={handleSelect}
      className="flex-no-shrink p-2 ml-2 border-2 rounded text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-500">
        <i className="fa fa-edit"></i>
      </button>

      {/* delete button */}
      <button 
      onClick={handleDelete}
      className="flex-no-shrink p-2 px-3 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task
