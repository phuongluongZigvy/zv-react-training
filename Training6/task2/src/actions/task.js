export const AddTask = (task) =>{
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const HandleTask = (task) =>{
    return {
        type: "HANDLE_TASK",
        payload: task
    }
}

export const Resubmit= (task) =>{
    return {
        type: "RESUBMIT",
        payload: task
    }
}

export const ReadyUpdate = (task) =>{
    return {
        type: "READY_UPDATE",
        payload: task
    }
}

export const Submitting = (task) =>{
    return {
        type: "SUBMITTING_UPDATE",
        payload: task
    }
}

export const SubmitSuccess = (task) =>{
    return {
        type: "SUBMITTING_SUCCESS",
        payload: task
    }
}
export const SubmitError= (task) =>{
    return {
        type: "SUBMITTING_ERROR",
        payload: task
    }
}