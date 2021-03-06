import React, { useReducer, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { validate } from '../../../../utils/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators),
			};
		case 'TOUCH': {
			return {
				...state,
				isTouched: true,
			};
		}
		default:
			return state;
	}
};

const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initialValue || '',
		isTouched: false,
		isValid: props.initialValid || false,
	});

	const { id, onInput } = props;
	const { value, isValid } = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event, isCheckBox = false) => {
		dispatch({
			type: 'CHANGE',
			val: isCheckBox ? (event.target.checked === true ? 'yes' : 'no') : event.target.value,
			validators: props.validators,
		});
	};

	const touchHandler = () => {
		dispatch({
			type: 'TOUCH',
		});
	};

	const getInputElement = () => {
		const { element } = props;
		switch (element) {
			case 'input': {
				const {
					id,
					type,
					placeholder,
					variant,
					label,
					disabled,
					errorText,
					multiline,
					rows,
					InputProps,
					size,
					fullWidth,
				} = props;
				return (
					<TextField
						id={id}
						type={type}
						placeholder={placeholder}
						variant={variant}
						label={label}
						value={inputState.value}
						disabled={disabled}
						error={!inputState.isValid && inputState.isTouched}
						helperText={!inputState.isValid && inputState.isTouched && errorText}
						multiline={multiline}
						rows={rows}
						InputProps={{ ...InputProps }}
						size={size}
						fullWidth={fullWidth}
						onChange={changeHandler}
						onBlur={touchHandler}
					/>
				);
			}
			case 'select': {
				const { disabled, label, selectItems, errorText } = props;
				return (
					<TextField
						id={id}
						select
						disabled={disabled}
						label={label}
						value={inputState.value}
						onChange={(e) => changeHandler(e, false)}
						onBlur={touchHandler}
						fullWidth={true}
						error={!inputState.isValid && inputState.isTouched}
						helperText={!inputState.isValid && inputState.isTouched && errorText}
					>
						{selectItems.map((item, index) => {
							return (
								<MenuItem key={index} value={item.value}>
									{item.label}
								</MenuItem>
							);
						})}
					</TextField>
				);
			}
			case 'checkbox': {
				const { label } = props;
				return (
					<FormControlLabel
						control={
							<Checkbox
								id={id}
								onChange={(event) => changeHandler(event, true)}
								name='checkedB'
								color='primary'
							/>
						}
						label={label}
					/>
				);
			}
			default:
				return null;
		}
	};

	return <>{getInputElement()}</>;
};

export default Input;
