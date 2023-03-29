import types from './types'
import { produce } from 'immer';

const INITIAL_STATE = {
    name: "About me",
    information: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        linkedin: "",
        gitRepository: "",
        personalDescription: "",
    }
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_PERSONAL_DATA:
            return produce(state, draftState => {
                return draftState = { ...state, ...action.item }
            })
        case types.SET_PERSONAL_DATA:
            return produce(state, draftState => {
                return draftState = { ...state, ...action.item }
            })
        case types.RESET_PERSONAL_DATA:
            return produce(state, draftState => {
                draftState.name = ''
            })
        default:
            return state
    }
}

export default personalDataReducer
