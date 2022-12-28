import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    listName: 'My interests',
    interestList: [
        'books', 'travels'
    ]
}

const interestReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_INTEREST:
            return produce(state, draftState => {
                draftState.interestList.push(action.item)
            })
        case types.RESET_INTERESTS:
            return produce(state, draftState => {
                draftState.listName = ''
                draftState.interestList = []
            })
        default:
            return state
    }
}

export default interestReducer
