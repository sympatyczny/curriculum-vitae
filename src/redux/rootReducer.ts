import { combineReducers } from 'redux';
import education from './modules/api/myData/education/reducer';
import experience from './modules/api/myData/experience/reducer';
import interests from './modules/api/myData/interest/reducer';
import personalData from './modules/api/myData/personalData/reducer';
import language from './modules/settings/language/reducer';
import layout from './modules/settings/layout/reducer';
import selectedTab from './modules/settings/selectedTab/reducer';
import collapsedSidebar from './modules/settings/collapsedSidebar/reducer';


export const RootReducer: any = combineReducers({
	myData: combineReducers({
		education,
		experience,
		interests,
		personalData,
	}),
	settings: combineReducers({
		language,
		layout,
		selectedTab,
		collapsedSidebar,
	}),
});

export default RootReducer;
