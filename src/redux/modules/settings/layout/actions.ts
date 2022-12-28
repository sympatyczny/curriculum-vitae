import types from './types'

export enum LayoutType {
    WHITE = 'WHITE',
    DARK = 'DARK',
}

export interface ILayout {
    layout: LayoutType;
}

const changeLayout = (item: LayoutType) => ({
    type: types.CHANGE_LAYOUT, item
})

export default {
    changeLayout
}
