
// export function getBrowserLanguage(): types.redux.settings.language {
export function getBrowserLanguage(): types.redux.IState {
	const FALLBACK_LANGUAGE = 'EN';

	let browserLanguage = navigator.language ?? FALLBACK_LANGUAGE;

	if (browserLanguage.includes('pl')) {
		browserLanguage = 'PL';
	} else if (browserLanguage.includes('en')) {
		browserLanguage = 'EN';
	} else {
		browserLanguage = FALLBACK_LANGUAGE;
	}

	// return browserLanguage as types.redux.settings.language;
	return browserLanguage as unknown as types.redux.IState;
}
