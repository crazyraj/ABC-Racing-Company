import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { DropDown } from '../type/DropDown.type';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	select: {
		color: 'white',
	},
	inputLabel: {
		color: 'antiquewhite',
	},
}));

const Dropdown = (props: DropDown) => {
	const classes = useStyles();
	const { id, labelId, value, onChange, list, inputLabel } = props;

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id={`${inputLabel.id}`} className={classes.inputLabel}>
				{inputLabel.label}
			</InputLabel>
			<Select
				labelId={`${id}`}
				id={`${labelId}`}
				value={`${value}`}
				onChange={onChange}
				className={classes.select}>
				{list.map((item) => (
					<MenuItem key={item.key} value={item.key}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
