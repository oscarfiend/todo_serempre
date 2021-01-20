import todo from '../../types'

const initialState={
    tasks:[],
    taskSelected:null,
    cordinate:{
        lat:"",
        lng:""
    }
}



export default (state = initialState, { type, payload }) => {
    switch (type) {

    case todo.add_task:
        return { 
            ...state, 
            tasks:[...state.tasks,payload ]
        }
    case todo.update_state:
        return{
            ...state,
            tasks:state.tasks.map(task=>task.id===payload.id? {
                ...task,
                state:payload.state,
                updates:[...task.updates,state.cordinate]
            }
            : task
            )
        }
    case todo.update_task:
        return {
            ...state,
            taskSelected:null,
            tasks:state.tasks.map(task=>task.id===payload.id? payload:task)
        }
    case todo.select_task:
        return {
            ...state,
            taskSelected:payload
        }
    case todo.delete_task:
        return{
            ...state,
            tasks:state.tasks.filter(task=>task.id!==payload),
            taskSelected:null
        }
    case todo.clean_data:
        return{
            ...state,
            taskSelected:null
        }
    case todo.set_cordinate:
        return{
            ...state,
            cordinate:payload
        }
    default:
        return state
    }
}
