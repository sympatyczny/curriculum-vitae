import types from './types';
import { produce } from 'immer';
import { TabName } from '../../../../utils/constants/tabName';

const INITIAL_STATE = {
    selectedTab: TabName.DASHBOARD,
}

const selectedTabReducer = (state = INITIAL_STATE, action: { type: any; item: any }) => {
    switch (action.type) {
        case types.CHANGE_SELECTED_TAB:
            return produce(state, draftState => {
                draftState.selectedTab = action.item
            })
        default:
            return state
    }
}

export default selectedTabReducer
