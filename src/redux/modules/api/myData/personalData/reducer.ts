import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    "name": "About me",
    "informations": {
        "firstName": "Piotr",
        "lastName": "Kwieciński",
        "phoneNumber": "xxxxxx887",
        "emailAddress": "xxx@gmail.com",
        "linkedin": "linkedin.com/in/piotrkwiecinski",
        "gitRepository": "github.com/sympatyczny",
        // "personalDescription": "Information about me",
    }
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_PERSONAL_DATA:
            return produce(state, draftState => {
                // draftState.informations.push(action.item)
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
