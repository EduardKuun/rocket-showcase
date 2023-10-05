import LocationContext from '@/contexts/LocationContext';
import { useContext } from 'react';

export default function useLocation() {
	const context = useContext(LocationContext);

	return context;
}
