import { Action, ActionType } from "../../model";
import { User } from "../../model/user";
import { Account } from "../../model/account";
import createReducer from "./createReducer";

export const auth = createReducer({}, {
	[ActionType.LOGIN](state: User, action: Action<User>) {
		return action.payload;
	},
	[ActionType.USER_DETAILS](state: User, action: Action<Account>) {
		return {
			...state,
			user: action.payload
		}
	},
	[ActionType.LOGOUT](state: User, action: Action<any>) {
		return action.payload;
	},
});
