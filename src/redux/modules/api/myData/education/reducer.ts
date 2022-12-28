import produce from 'immer';
import types from './types'

const INITIAL_STATE = {
  listName: 'My education',
  schoolList: [
    'PrimarySchool', 'SecondarySchool', 'HighSchool', 'University'
  ]
}

const educationReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
  switch (action.type) {
    case types.ADD_SCHOOL:
      return produce(state, draftState => {
        draftState.schoolList.push(action.item)
      })
    case types.RESET_SCHOOLS:
      return produce(state, draftState => {
        draftState.schoolList = []
        draftState.listName = ''
      })
    default:
      return state
  }
}

export default educationReducer
