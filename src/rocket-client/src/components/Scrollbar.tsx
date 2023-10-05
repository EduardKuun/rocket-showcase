import 'simplebar/dist/simplebar.min.css';
import { forwardRef } from 'react';
import SimpleBar from 'simplebar-react';
import { styled, SxProps, Theme } from '@mui/material';

const ScrollbarRoot = styled(SimpleBar)``;

interface Props {
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

const Scrollbar = forwardRef<any, Props>((props, ref) => {
	return <ScrollbarRoot ref={ref} {...props} />;
});

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;
