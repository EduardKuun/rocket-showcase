import SettingsContext from '@/contexts/SettingsContext';
import { useContext } from 'react';

export default function useSettings() {
	const context = useContext(SettingsContext);

	return context;
}
