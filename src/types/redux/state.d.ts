import { IEducation } from '@Redux/modules/api/myData/education/actions';
import { IExperience } from '@Redux/modules/api/myData/experience/actions';
import { IPersonalData } from '@Redux/modules/api/myData/personalData/actions';
import { IInterests } from '@Redux/modules/api/mydata/interest/actions';

declare global {
	namespace types {
		namespace redux {
			interface IState {
				myData: {
					education: types.redux.myData.IEducation;
					experience: types.redux.myData.IExperience;
					personalData: types.redux.myData.IPersonalData;
					interests: types.redux.myData.IInterests;
				};
				settings: {
					language: types.redux.settings.language;
					layout: types.redux.settings.layout;
					selectedTab: types.redux.settings.selectedTab;
					collapsedSidebar: types.redux.settings.collapsedSidebar;
					config: ISettingsConfig;
				};
			}
		}
	}
}
