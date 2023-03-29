import produce from 'immer';
import types from './types'

const collapsed = localStorage.getItem('collapsed') === 'true' ? true : false

const INITIAL_STATE = {
    collapsedSidebar: collapsed
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: boolean }) => {
    switch (action.type) {
        case types.COLLAPSE:
            return produce(state, draftState => {
                draftState.collapsedSidebar = action.item
            })
        default:
            return state
    }
}

export default personalDataReducer
