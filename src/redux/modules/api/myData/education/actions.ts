import types from './types'

export interface IEducation {
	listName?: string;
	schoolList?: string[];
}

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
