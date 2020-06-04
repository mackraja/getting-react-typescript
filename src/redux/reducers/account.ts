import { Action, ActionType } from "../../model";
import { Account, AccountList } from "../../model/account";
import createReducer from "./createReducer";

export const accounts = createReducer([], {
	[ActionType.ADD_ACCOUNT](state: Account[], action: Action<Account>) {
		return state;
	},
	[ActionType.UPDATE_ACCOUNT](state: Account[], action: Action<number>) {
		return action.payload; 
	},
	[ActionType.DELETE_ACCOUNT](state: Account[], action: Action<boolean>) {
		return state;
	},
	[ActionType.LIST_ACCOUNTS](state: Account[], action: Action<AccountList>) {
		return action.payload;
	}
});

export const account = createReducer({}, {
	[ActionType.GET_ACCOUNT](state: Account, action: Action<Account>) {
		return action.payload;
	}
});
