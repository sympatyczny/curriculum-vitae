import types from "./types";

const setTab = (item: string) => (
    {
        type: types.CHANGE_SELECTED_TAB, item
    })

export default {
    setTab,
}
