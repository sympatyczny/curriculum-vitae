import types from './types'

const add = (item: string) => ({
  type: types.ADD_SCHOOL, item
})

const reset = (item: string) => ({
  type: types.RESET_SCHOOLS, item
})

export default {
  add,
  reset
}
