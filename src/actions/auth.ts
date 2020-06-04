import { Auth } from "../model/user";
import { ActionType } from "../model";

export const LogIn = (auth: Auth) => async (dispatch: Function, getState: Function, api: any)  => {
    try {
			let resp = await api.post('session', auth);			
			return dispatch({ type: ActionType.LOGIN, payload: resp.data });
		} catch(err) {
			return dispatch({ type: ActionType.ALERT, payload: err });
		}
};

export const getAccountDetails = () => async (dispatch: Function, getState: Function, api: any)  => {
	try {
		let resp = await api.get('session', {}, {}, getState().auth.token);
		dispatch({ type: ActionType.ALERT, payload: {
			message:  `Welcome back ${resp.data.firstName} ${resp.data.lastName}`,
			statusCode: 200
		} });
		return dispatch({
			type: ActionType.USER_DETAILS,
			payload: resp.data
		});
	} catch(err) {
		return dispatch({type: ActionType.LOGOUT, payload: {}});
	}
};

export const LogOut = () => async (dispatch: Function, getState: Function, api: any) => {
	dispatch({ type: ActionType.ALERT, payload: {
		message: "Logout Successfully !!",
		statusCode: 200
	} });
	return dispatch({ type: ActionType.LOGOUT, payload: {} });
};

export const closeAlert = () => async (dispatch: Function, getState: Function, api: any) => {
	return dispatch({ type: ActionType.ALERT, payload: {} });
};
