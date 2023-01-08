import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    "name": "My interests",
    "hobby": [
        {
            "interestName": "Books",
            "interestDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            "interestName": "Hiking",
            "interestDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            "interestName": "Financial markets",
            "interestDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    ]
}

const interestReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_INTEREST:
            return produce(state, draftState => {
                draftState.hobby.push(action.item)
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
