// Colors

import { ThemeOptions } from '@mui/material';
import { neutral } from './base-theme-options';

const background = {
	default: '#0B0F19',
	paper: neutral[900],
};

const divider = '#2D3748';

const text = {
	primary: '#EDF2F7',
	secondary: '#A0AEC0',
	disabled: 'rgba(255, 255, 255, 0.48)',
};

export const darkThemeOptions: ThemeOptions = {
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
						backgroundColor: neutral[800],
						'& .MuiChip-deleteIcon': {
							color: neutral[500],
						},
					},
					'&.MuiChip-outlinedDefault': {
						borderColor: neutral[700],
						'& .MuiChip-deleteIcon': {
							color: neutral[700],
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
					color: neutral[700],
				},
				track: {
					backgroundColor: neutral[500],
					opacity: 1,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: `1px solid ${divider}`,
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					'.MuiTableCell-root': {
						color: neutral[300],
						backgroundColor: neutral[800],
					},
				},
			},
		},
	},
	palette: {
		action: {
			active: neutral[400],
			hover: 'rgba(255, 255, 255, 0.04)',
			selected: 'rgba(255, 255, 255, 0.08)',
			disabledBackground: 'rgba(255, 255, 255, 0.12)',
			disabled: 'rgba(255, 255, 255, 0.26)',
		},
		background,
		divider,
		mode: 'dark',
		neutral,
		text,
	},
	shadows: [
		'none',
		'0px 1px 2px rgba(0, 0, 0, 0.24)',
		'0px 1px 2px rgba(0, 0, 0, 0.24)',
		'0px 1px 4px rgba(0, 0, 0, 0.24)',
		'0px 1px 5px rgba(0, 0, 0, 0.24)',
		'0px 1px 6px rgba(0, 0, 0, 0.24)',
		'0px 2px 6px rgba(0, 0, 0, 0.24)',
		'0px 3px 6px rgba(0, 0, 0, 0.24)',
		'0px 4px 6px rgba(0, 0, 0, 0.24)',
		'0px 5px 12px rgba(0, 0, 0, 0.24)',
		'0px 5px 14px rgba(0, 0, 0, 0.24)',
		'0px 5px 15px rgba(0, 0, 0, 0.24)',
		'0px 6px 15px rgba(0, 0, 0, 0.24)',
		'0px 7px 15px rgba(0, 0, 0, 0.24)',
		'0px 8px 15px rgba(0, 0, 0, 0.24)',
		'0px 9px 15px rgba(0, 0, 0, 0.24)',
		'0px 10px 15px rgba(0, 0, 0, 0.24)',
		'0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
		'0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
		'0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
		'0px 20px 25px rgba(0, 0, 0, 0.24)',
		'0px 25px 50px rgba(0, 0, 0, 0.24)',
		'0px 25px 50px rgba(0, 0, 0, 0.24)',
		'0px 25px 50px rgba(0, 0, 0, 0.24)',
		'0px 25px 50px rgba(0, 0, 0, 0.24)',
	],
};
