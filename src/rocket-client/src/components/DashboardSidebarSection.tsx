import { List, ListSubheader, SxProps, Theme } from '@mui/material';
import DashboardSidebarItem from './DahboardSidebarItem';

const renderNavItems = ({ depth = 0, items, path }: any) => (
	<List disablePadding>
		{items.reduce((acc: any, item: any) => reduceChildRoutes({ acc, depth, item, path }), [])}
	</List>
);

const reduceChildRoutes = ({ acc, depth, item, path }: any) => {
	const key = `${item.title}-${depth}`;
	const partialMatch = item.path ? path.includes(item.path) : false;
	const exactMatch = path.split('?')[0] === item.path; // We don't compare query params

	if (item.children) {
		acc.push(
			<DashboardSidebarItem
				active={partialMatch}
				chip={item.chip}
				depth={depth}
				icon={item.icon}
				info={item.info}
				key={key}
				open={partialMatch}
				path={item.path}
				title={item.title}
			>
				{renderNavItems({
					depth: depth + 1,
					items: item.children,
					path,
				})}
			</DashboardSidebarItem>
		);
	} else {
		acc.push(
			<DashboardSidebarItem
				active={exactMatch}
				chip={item.chip}
				depth={depth}
				icon={item.icon}
				info={item.info}
				key={key}
				path={item.path}
				title={item.title}
			/>
		);
	}

	return acc;
};

interface Props {
	items: any[];
	path: string;
	title: string;
	sx?: SxProps<Theme>;
}

const DashboardSidebarSection = ({ items, path, title, sx, ...other }: Props) => {
	return (
		<List {...other}>
			{renderNavItems({
				items,
				path,
			})}
		</List>
	);
};

export default DashboardSidebarSection;
