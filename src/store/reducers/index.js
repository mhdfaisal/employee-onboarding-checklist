import { combineReducers } from 'redux';

import { ADD_CANDIDATE_DETAILS, ADD_INTERVIEW_FEEDBACK, ADD_SALARY_NEGOTIATION } from '../types';

const saveDataReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_CANDIDATE_DETAILS:
			return { ...state, type, ...payload };
		case ADD_INTERVIEW_FEEDBACK:
			return { ...state, type, ...payload };
		case ADD_SALARY_NEGOTIATION:
			return { ...state, type, ...payload };
		default:
			return state;
	}
};

const rootReducer = combineReducers({ onBoardingInfo: saveDataReducer });
export default rootReducer;
