import task from '../../components/task'
import todo from '../../types'

const initialState={
    tasks:[],
    taskSelected:null
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
                state:payload.state
            }: task)
        }
    case todo.update_task:
        return {
            ...task,
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
    default:
        return state
    }
}
