import { colors, ThemeOptions } from '@mui/material';

// needed for custom/new props
declare module '@mui/material/styles' {
	interface Palette {
		neutral: Palette['primary'];
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary'];
	}
}

export const borderRadiusValues = {
	default: 12,
	card: '20px',
};

export const neutral = {
	100: '#F9FAFC',
	200: '#E5E7EB',
	300: '#D1D5DB',
	400: '#9CA3AF',
	500: '#6B7280',
	600: '#4B5563',
	700: '#374151',
	800: '#1A2130',
	900: '#111827',
};

const success = {
	contrastText: '#ffffff',
	main: '#4caf50',
};

const warning = {
	contrastText: '#ffffff',
	main: '#ff9800',
};

const error = {
	contrastText: '#ffffff',
	main: '#f44336',
};

export const baseThemeOptions: ThemeOptions = {
	palette: {
		error,
		success,
		warning,
		neutral,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1000,
			lg: 1200,
			xl: 1920,
		},
	},
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					fontSize: 14,
					fontWeight: 600,
					letterSpacing: 0,
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
				sizeSmall: {
					padding: '4px 12px',
				},
				sizeMedium: {
					padding: '6px 16px',
				},
				sizeLarge: {
					padding: '8px 20px',
				},
				textSizeSmall: {
					padding: '5px 8px',
				},
				textSizeMedium: {
					padding: '7px 12px',
				},
				textSizeLarge: {
					padding: '9px 16px',
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiButtonGroup: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					padding: '12px',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: borderRadiusValues.card,
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: '32px 24px',
					'&:last-child': {
						paddingBottom: '32px',
					},
				},
			},
		},
		MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: {
					variant: 'h6',
				},
				subheaderTypographyProps: {
					variant: 'body2',
				},
			},
			styleOverrides: {
				root: {
					padding: '24px 22px',
				},
			},
		},
		MuiCheckbox: {
			defaultProps: {
				color: 'primary',
			},
			styleOverrides: {
				root: {
					borderRadius: borderRadiusValues.default,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					fontWeight: 500,
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box',
				},
				html: {
					MozOsxFontSmoothing: 'grayscale',
					WebkitFontSmoothing: 'antialiased',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%',
				},
				body: {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%',
				},
				'#__next': {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					height: '100%',
					width: '100%',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: borderRadiusValues.default,
					padding: 8,
				},
				sizeSmall: {
					padding: 4,
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					borderRadius: 3,
					overflow: 'hidden',
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover',
			},
			styleOverrides: {
				root: {
					fontWeight: 600,
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					marginRight: '16px',
					'&.MuiListItemIcon-root': {
						minWidth: 'unset',
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					fontWeight: 500,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
		MuiPopover: {
			defaultProps: {
				elevation: 16,
			},
		},
		MuiRadio: {
			defaultProps: {
				color: 'primary',
			},
		},
		MuiSwitch: {
			defaultProps: {
				color: 'primary',
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					minWidth: 60,
					paddingLeft: 8,
					paddingRight: 8,
					textTransform: 'none',
					borderRadius: borderRadiusValues.default,
					height: 30,
					minHeight: 30,
					'& + &': {
						marginLeft: 4,
					},
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					minHeight: 30,
				},
				indicator: {
					height: 30,
					minHeight: 30,
					top: 0,
					borderRadius: borderRadiusValues.default,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					padding: '15px 16px',
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					borderBottom: 'none',
					'& .MuiTableCell-root': {
						borderBottom: 'none',
						fontSize: '12px',
						fontWeight: 600,
						lineHeight: 1,
						letterSpacing: 0.5,
						textTransform: 'uppercase',
					},
					'& .MuiTableCell-paddingCheckbox': {
						paddingTop: 4,
						paddingBottom: 4,
					},
				},
			},
		},
	},
	direction: 'ltr',
	shape: {
		borderRadius: borderRadiusValues.default,
	},
	typography: {
		button: {
			fontWeight: 600,
		},
		fontFamily:
			'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: 1.57,
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight: 500,
			lineHeight: 1.75,
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontWeight: 500,
			lineHeight: 1.57,
		},
		overline: {
			fontSize: '0.75rem',
			fontWeight: 600,
			letterSpacing: '0.5px',
			lineHeight: 2.5,
			textTransform: 'uppercase',
		},
		caption: {
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: 1.66,
		},
		h1: {
			fontWeight: 700,
			fontSize: '3.5rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
		h2: {
			fontWeight: 700,
			fontSize: '3rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
		h3: {
			fontWeight: 700,
			fontSize: '2.25rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
		h4: {
			fontWeight: 700,
			fontSize: '2rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
		h5: {
			fontWeight: 700,
			fontSize: '1.5rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
		h6: {
			fontWeight: 700,
			fontSize: '1.125rem',
			lineHeight: 1.375,
			fontFamily:
				'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		},
	},
	zIndex: {
		appBar: 1100,
		drawer: 1200,
	},
};
