export const saveData = (type, candidateData, step) => {
	return { type, payload: { candidateInfo: { ...candidateData }, step } };
};
