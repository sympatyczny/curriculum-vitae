import produce from 'immer';
import { LayoutType } from "./actions";
import types from "./types";

const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : LayoutType.LIGHT

const INITIAL_STATE = {
    layout: theme
}

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.CHANGE_LAYOUT:
            return produce(state, draftState => {
                draftState.layout = action.item
            })
        default:
            return state
    }
}

export default personalDataReducer
