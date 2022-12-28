import produce from 'immer';
import { LanguageType } from './actions';
import types from './types'


const INITIAL_STATE = {
    language: LanguageType.EN
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.CHANGE_LANGUAGE:
            return produce(state, draftState => {
                draftState.language = action.item
            })
        default:
            return state
    }
}

export default personalDataReducer
