// Colors

import { ThemeOptions } from '@mui/material';
import { neutral } from './base-theme-options';

const background = {
	default: '#F6F7F9',
	paper: '#FFFFFF',
};

const divider = '#EDEFF7';

const text = {
	primary: '#172b4d',
	secondary: '#6b778c',
	disabled: 'rgba(55, 65, 81, 0.48)',
};

export const lightThemeOptions: ThemeOptions = {
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: neutral[500],
					color: '#FFFFFF',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					'&.MuiChip-filledDefault': {
						backgroundColor: neutral[200],
						'& .MuiChip-deleteIcon': {
							color: neutral[400],
						},
					},
					'&.MuiChip-outlinedDefault': {
						'& .MuiChip-deleteIcon': {
							color: neutral[300],
						},
					},
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: text.primary,
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					'&::placeholder': {
						opacity: 1,
						color: text.secondary,
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: divider,
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: 'solid',
					borderWidth: 1,
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: 'solid',
					borderWidth: 1,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				switchBase: {
					color: neutral[500],
				},
				track: {
					backgroundColor: neutral[400],
					opacity: 1,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					'.MuiTableCell-root': {
						color: neutral[700],
						backgroundColor: neutral[100],
					},
				},
			},
		},
	},
	palette: {
		action: {
			active: neutral[500],
			focus: 'rgba(55, 65, 81, 0.12)',
			hover: 'rgba(55, 65, 81, 0.04)',
			selected: 'rgba(55, 65, 81, 0.08)',
			disabledBackground: 'rgba(55, 65, 81, 0.12)',
			disabled: 'rgba(55, 65, 81, 0.26)',
		},
		background,
		divider,
		mode: 'light',
		neutral,
		text,
	},
	shadows: [
		'none',
		'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
		'0px 1px 2px rgba(100, 116, 139, 0.12)',
		'0px 1px 4px rgba(100, 116, 139, 0.12)',
		'0px 1px 5px rgba(100, 116, 139, 0.12)',
		'0px 1px 6px rgba(100, 116, 139, 0.12)',
		'0px 2px 6px rgba(100, 116, 139, 0.12)',
		'0px 3px 6px rgba(100, 116, 139, 0.12)',
		'0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
		'0px 5px 12px rgba(100, 116, 139, 0.12)',
		'0px 5px 14px rgba(100, 116, 139, 0.12)',
		'0px 5px 15px rgba(100, 116, 139, 0.12)',
		'0px 6px 15px rgba(100, 116, 139, 0.12)',
		'0px 7px 15px rgba(100, 116, 139, 0.12)',
		'0px 8px 15px rgba(100, 116, 139, 0.12)',
		'0px 9px 15px rgba(100, 116, 139, 0.12)',
		'0px 10px 15px rgba(100, 116, 139, 0.12)',
		'0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
		'0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
		'0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
		'0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
		'0px 25px 50px rgba(100, 116, 139, 0.25)',
		'0px 25px 50px rgba(100, 116, 139, 0.25)',
		'0px 25px 50px rgba(100, 116, 139, 0.25)',
		'0px 25px 50px rgba(100, 116, 139, 0.25)',
	],
};
