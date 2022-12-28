
import { IEducation } from '@Redux/modules/api/personalData/education/actions';
import { IExperience } from '@Redux/modules/api/personalData/education/actions';
import { IPersonalData } from '@Redux/modules/api/personalData/education/actions';
import { IInterests} from '@Redux/modules/api/personalData/education/actions';


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
					config: ISettingsConfig;
				};
			}
		}
	}
}
