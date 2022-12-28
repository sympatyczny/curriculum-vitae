import types from './types'

export interface IPersonalData {
    listName?: string;
    personalDataList?: string[];
}

const add = (item: string) => ({
    type: types.ADD_PERSONAL_DATA, item
})

const reset = (item: string) => ({
    type: types.RESET_PERSONAL_DATA, item
})

export default {
    add,
    reset
}
