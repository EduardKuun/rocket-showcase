import { useEffect } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';

const styleCache = () =>
	createCache({
		key: 'rtl',
		prepend: true,
		stylisPlugins: [stylisRTLPlugin],
	});

interface IProps {
	direction: 'rtl' | 'ltr';
	children: React.ReactNode;
}

const RTL: React.FC<IProps> = (props: IProps) => {
	const { children, direction = 'ltr' } = props;

	useEffect(() => {
		document.dir = direction;
	}, [direction]);

	if (direction === 'rtl') {
		return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
	}

	return <>{children}</>;
};

export default RTL;
