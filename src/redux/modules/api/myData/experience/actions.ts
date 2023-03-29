import types from './types'

export interface IExperience {
	listName?: string;
	workPlaceList?: string[];
}

const add = (item: string) => ({
  type: types.ADD_WORKPLACE, item
})

const reset = (item: string) => ({
  type: types.RESET_WORKPLACES, item
})

const set = (item: string) => ({
  type: types.SET_EXPERIENCE, item
})

export default {
  add,
  reset,
  set,
}
