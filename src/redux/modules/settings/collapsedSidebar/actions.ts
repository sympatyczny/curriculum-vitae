import types from "./types";

const collapseSidebar = (item: boolean) => (
    {
        type: types.COLLAPSE, item
    })

export default {
    collapseSidebar,
}
