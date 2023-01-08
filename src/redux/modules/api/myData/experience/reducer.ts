import types from './types'
import { produce } from 'immer';


const INITIAL_STATE = {
    "name": "My experience",
    "workPlace": [
        {
            "workplaceName": "TUATARA SP. Z O.O.",
            "startDate": "06/2020",
            "endDate": "01.2023",
            "position": "Frontend / FullStack developer",
            "skills": [
                {
                    "skillName": "REACT+TS",
                    "skillLevel": "2"
                },
                {
                    "skillName": "JAVASCRIPT",
                    "skillLevel": "3"
                },
            ],
            "jobDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa. Varius duis at consectetur lorem donec."
        },
        {
            "workplaceName": "TECNA SP. Z O.O.",
            "startDate": "06/2018",
            "endDate": "06.2020",
            "position": "Junior JAVA developer",
            "skills": [
                {
                    "skillName": "JAVA",
                    "skillLevel": "3"
                },
                {
                    "skillName": "PL/SQL",
                    "skillLevel": "3"
                },
                {
                    "skillName": "Oracle Databases",
                    "skillLevel": "2"
                }
            ],
            "jobDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa. Varius duis at consectetur lorem donec."
        },
    ]
}

const experienceReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.ADD_WORKPLACE:
            return produce(state, draftState => {
                draftState.workPlace.push(action.item)
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
