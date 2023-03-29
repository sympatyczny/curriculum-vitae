import types from './types'

const add = (item: string) => ({
    type: types.ADD_PERSONAL_DATA, item
})

const reset = (item: string) => ({
    type: types.RESET_PERSONAL_DATA, item
})

const set = (item: string) => ({
    type: types.SET_PERSONAL_DATA, item
})

export default {
    add,
    reset,
    set,
}
