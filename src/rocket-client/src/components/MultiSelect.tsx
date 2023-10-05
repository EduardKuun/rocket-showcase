import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Value {
	label: string;
	value: string;
}

interface Props {
	label: string;
	onChange: (value: string[]) => void;
	options: Value[];
	value: string[];
}

const MultiSelect = ({ label, onChange, options, value = [], ...other }: Props) => {
	const anchorRef = useRef(null);
	const [openMenu, setOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setOpenMenu(true);
	};

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = [...value];

		if (event.target.checked) {
			newValue.push(event.target.value);
		} else {
			newValue = newValue.filter((item) => item !== event.target.value);
		}

		onChange?.(newValue);
	};

	return (
		<>
			<Button
				color='inherit'
				endIcon={<ExpandMoreIcon fontSize='small' />}
				onClick={handleOpenMenu}
				ref={anchorRef}
				{...other}
			>
				{label}
			</Button>
			<Menu
				anchorEl={anchorRef.current}
				onClose={handleCloseMenu}
				open={openMenu}
				PaperProps={{ style: { width: 250 } }}
			>
				{options.map((option) => (
					<MenuItem key={option.label}>
						<FormControlLabel
							control={
								<Checkbox
									checked={value.includes(option.value)}
									onChange={handleChange}
									value={option.value}
								/>
							}
							label={option.label}
							sx={{
								flexGrow: 1,
								mr: 0,
							}}
						/>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default MultiSelect;
