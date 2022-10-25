import * as Actions from './ActionTypes'

export const incrementer = (pas) =>{
    return {
        type : Actions.INCREMENT,
        payload : pas,
    }
}

export const decrementer = (pas) =>{
    return {
        type : Actions.DECREMENT,
        payload : pas,
    }
}

export const initialiser = () =>{
    return {
        type : Actions.INITIALIER
    }
}



