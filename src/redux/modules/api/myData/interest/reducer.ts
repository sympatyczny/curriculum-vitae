import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    name: "My interests",
    hobby: [
        {
            id: "",
            interestName: "",
            interestDescription: "",
        }
    ]
}

const interestReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_INTEREST:
            return produce(state, draftState => {
                draftState.hobby.push(action.item)
            })
        case types.SET_INTERESTS:
            return produce(state, draftState => {
                draftState.hobby = action.item.hobby
            })
        case types.RESET_INTERESTS:
            return produce(state, draftState => {
                draftState.name = ''
                draftState.hobby = []
            })
        default:
            return state
    }
}

export default interestReducer
