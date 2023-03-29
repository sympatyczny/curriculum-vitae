import types from './types'

export interface IInterests {
    listName?: string;
    interestList?: string[];
}

const add = (item: string) => ({
    type: types.ADD_INTEREST, item
})

const reset = (item: string) => ({
    type: types.RESET_INTERESTS, item
})

const set = (item: string) => ({
    type: types.SET_INTERESTS, item
})

export default {
    add,
    reset,
    set,
}
