import { LayoutType } from "./actions";
import types from "./types";

const INITIAL_STATE = {
    layout: LayoutType.WHITE
}
// const init = getBrowserLanguage();

const personalDataReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.CHANGE_LAYOUT:
            return {
                ...state, layout: [action.item]
            }
        default:
            return state
    }
}

export default personalDataReducer
