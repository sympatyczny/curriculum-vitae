import types from './types'

export enum LanguageType {
    EN = 'EN',
    PL = 'PL',
}

export interface ILanguage {
    language?: LanguageType;
}

const changeLanguage = (item: LanguageType) => ({
    type: types.CHANGE_LANGUAGE, item
})

export default {
    changeLanguage
}
