import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    listName: 'My informations',
    personalDataList: [
        'Piotr', 'K.', '11111111'
    ]
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_PERSONAL_DATA:
            return produce(state, draftState => {
                draftState.personalDataList.push(action.item)
            })
        case types.RESET_PERSONAL_DATA:
            return produce(state, draftState => {
                draftState.listName = ''
                draftState.personalDataList = []
            })
        default:
            return state
    }
}

export default personalDataReducer
