export const saveData = (type, candidateData, step) => {
	//assignee
	return { type, payload: { candidateInfo: { ...candidateData }, step } };
};
