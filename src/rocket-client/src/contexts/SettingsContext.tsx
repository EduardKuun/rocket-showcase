import { ISettings } from '@/lib/models/custom/ISettings';
import { colors } from '@mui/material';
import { createContext, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialSettings: ISettings = {
	theme: 'dark',
	language: 'en',
	isOnline: typeof window !== 'undefined' ? window.navigator.onLine : false,
	direction: 'ltr',
	primaryColor: colors.blue[500],
	secondaryColor: colors.pink[500],
	trackSearchRadius: 100,
};

function isValidSettingsObject(obj: any): obj is ISettings {
	return (
		'theme' in obj &&
		'language' in obj &&
		'isOnline' in obj &&
		'direction' in obj &&
		'primaryColor' in obj &&
		'secondaryColor' in obj &&
		'trackSearchRadius' in obj
	);
}

export const restoreSettings = () => {
	let settings = null;

	try {
		const storedData = window.localStorage.getItem('settings');

		if (storedData) {
			settings = JSON.parse(storedData) as ISettings;
			if (!isValidSettingsObject(settings)) {
				alert('Critical error. Clear your local storage.');
			}
		} else {
			settings = {
				language: initialSettings.language,
				theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
				isOnline: window.navigator.onLine,
				direction: initialSettings.direction,
				primaryColor: initialSettings.primaryColor,
				secondaryColor: initialSettings.secondaryColor,
				trackSearchRadius: initialSettings.trackSearchRadius,
			} as ISettings;
		}
	} catch (err) {
		console.error(err);
		// If stored data is not a strigified JSON this will fail,
		// that's why we catch the error
	}

	return settings;
};

export const storeSettings = (settings: ISettings) => {
	window.localStorage.setItem('settings', JSON.stringify(settings));
};

interface ContextValueTypes {
	settings: ISettings;
	saveSettings: (settings: ISettings) => void;
}

const SettingsContext = createContext<ContextValueTypes>({
	settings: initialSettings,
	saveSettings: (_settings: ISettings) => {},
});

interface IProps {
	children: React.ReactNode;
}

export const SettingsProvider: React.FC<IProps> = (props: IProps) => {
	const { children } = props;
	const { i18n } = useTranslation();
	const [settings, setSettings] = useState(initialSettings);

	const handleOffline = useCallback(
		(event: any) => {
			const updatedSettings = { ...settings, isOnline: false };
			setSettings(updatedSettings);
		},
		[settings]
	);

	const handleOnline = useCallback(
		(event: any) => {
			const updatedSettings = { ...settings, isOnline: true };
			setSettings(updatedSettings);
		},
		[settings]
	);

	useEffect(() => {
		window.addEventListener('offline', handleOffline);
		return () => {
			window.removeEventListener('offline', handleOffline);
		};
	}, [handleOffline]);

	useEffect(() => {
		window.addEventListener('online', handleOnline);
		return () => {
			window.removeEventListener('online', handleOnline);
		};
	}, [handleOnline]);

	useEffect(() => {
		const restoredSettings = restoreSettings();

		if (restoredSettings) {
			i18n.changeLanguage(restoredSettings.language);
			setSettings({ ...restoredSettings, isOnline: window.navigator.onLine });
		}
	}, []);

	const saveSettings = (updatedSettings: ISettings) => {
		setSettings({ ...updatedSettings, isOnline: window.navigator.onLine });
		storeSettings(updatedSettings);
	};

	return (
		<SettingsContext.Provider
			value={{
				settings,
				saveSettings,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
