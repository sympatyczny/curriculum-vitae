import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    listName: 'My experience',
    workPlaceList: [
        'TCN', 'TTR'
    ]
}

const experienceReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_WORKPLACE:
            return produce(state, draftState => {
                draftState.workPlaceList.push(action.item)
            })
        case types.RESET_WORKPLACES:
            return produce(state, draftState => {
                draftState.listName = ''
                draftState.workPlaceList = []
            })
        default:
            return state
    }
}

export default experienceReducer
