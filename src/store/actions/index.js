import { departmentConstantsArray, HR } from '../../utils/departmentConstants';

export const saveData = (type, candidateData, step) => {
	let assignee = HR;
	if (step === 2) {
		const { department } = candidateData;
		const deptIndex = departmentConstantsArray.findIndex((dept) => {
			return dept?.value === department;
		});
		if (deptIndex > -1) {
			assignee = departmentConstantsArray[deptIndex]?.value ?? HR;
		}
	}
	return { type, payload: { candidateInfo: { ...candidateData }, step, assignee } };
};
