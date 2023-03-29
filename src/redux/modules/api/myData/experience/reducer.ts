import types from './types'
import { produce } from 'immer';

const INITIAL_STATE = {
    name: "experience",
    workPlace: [{
        id: "",
        workplaceName: "",
        startDate: "",
        endDate: "",
        position: "",
        skills: [
            {
                skillName: "",
                skillLevel: ""
            },
        ],
        jobDescription: ""
    }]
}

const experienceReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {

    switch (action.type) {
        case types.ADD_WORKPLACE:
            return produce(state, draftState => {
                draftState.workPlace.push(action.item)
            })
        case types.SET_EXPERIENCE:
            return produce(state, draftState => {
                draftState.workPlace = action.item.workPlace
            })
        case types.RESET_WORKPLACES:
            return produce(state, draftState => {
                draftState.name = ''
                draftState.workPlace = []
            })
        default:
            return state
    }
}

export default experienceReducer
