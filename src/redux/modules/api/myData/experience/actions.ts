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

export default {
  add,
  reset
}
