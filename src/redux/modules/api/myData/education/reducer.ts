import produce from 'immer';
import types from './types'

const INITIAL_STATE = {
  "name": 'My Education',
  "schools": [
    {
      "name": "Warsaw University of Technology",
      "faculty": "Institute of Computer Science",
      "schoolType": "Postgraduate",
      "startDate": "2022",
      "endDate": "2023",
      "course": "Postgraduate course in Java (EE) programming & software development",
    },
    {
      "name": "Military University of Technology in Warsaw",
      "faculty": " Faculty of Mechatronics & Aviation",
      "schoolType": "University",
      "startDate": "2011",
      "endDate": "2015",
      "course": "Engineer’s degree programme in System Security Engineering",
    }
  ]
}

const educationReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
  switch (action.type) {
    case types.ADD_SCHOOL:
      return produce(state, draftState => {
        draftState.schools.push(action.item)
      })
    case types.RESET_SCHOOLS:
      return produce(state, draftState => {
        draftState.schools = []
        draftState.name = ''
      })
    default:
      return state
  }
}

export default educationReducer
