import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors, ThemeOptions } from '@mui/material';
import { baseThemeOptions, neutral } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';
import Color from 'color';
import { ISettings } from '@/lib/models/custom/ISettings';

export const createTheme = (config: ISettings) => {
	const themeBase: ThemeOptions = {
		direction: config.direction,
		palette: {
			primary: {
				main: config.primaryColor,
				light: Color(config.primaryColor).lighten(0.25).toString(),
				dark: Color(config.primaryColor).darken(0.25).toString(),
			},
			secondary: {
				main: config.secondaryColor,
				light: Color(config.secondaryColor).lighten(0.25).toString(),
				dark: Color(config.secondaryColor).darken(0.25).toString(),
			},
			neutral,
		},
	};

	let theme = createMuiTheme(
		baseThemeOptions,
		config.theme === 'dark' ? darkThemeOptions : lightThemeOptions,
		themeBase
	);

	return responsiveFontSizes(theme);
};
