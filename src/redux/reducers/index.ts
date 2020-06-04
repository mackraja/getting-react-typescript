import { combineReducers } from "redux";
import { User } from "../../model/user";
import { Alert } from "../../model";

import * as authReducer from "./user";
import * as alertReducer from "./alert";

export interface RootState {
	auth: User;
	alert: Alert;
}

export default () =>
	combineReducers({
		...authReducer,
		...alertReducer,
	});
