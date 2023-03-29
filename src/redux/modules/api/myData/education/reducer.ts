import produce from 'immer';
import types from './types'

const INITIAL_STATE = {
  name: 'My Education',
  schools: [{
    id: "",
    name: "",
    faculty: "",
    schoolType: "",
    startDate: "",
    endDate: "",
    course: "",
  }]
}

const educationReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
  switch (action.type) {
    case types.SET_EDUCATION:
      return produce(state, draftState => {
        draftState.schools = action.item.schools
      })
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
