import Scrollbar from '@/components/Scrollbar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box, Drawer, Theme, useMediaQuery, useTheme } from '@mui/material';
import { TFunction } from 'i18next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { GiTrail } from 'react-icons/gi';
import { FaStore } from 'react-icons/fa';
import DashboardSidebarSection from './DashboardSidebarSection';

interface Props {
  open: boolean;
  onClose: () => void;
}

const width = 280;
const getSections = (t: TFunction<'translation'>) => [
  {
    title: t('Pages'),
    items: [
      {
        title: t('Home'),
        path: '/',
        icon: <HomeOutlinedIcon fontSize='large' />,
      },
      {
        title: t('Calendar'),
        path: '/showroom',
        icon: <CalendarTodayOutlinedIcon fontSize='large' />,
      },
      {
        title: t('Conversations'),
        path: '/conversations',
        icon: <ForumOutlinedIcon fontSize='large' />,
      },
      {
        title: t('Marketplace'),
        path: '/marketplace',
        icon: <FaStore fontSize='large' />,
      },
      {
        title: t('Tracks'),
        path: '/tracks',
        icon: <GiTrail fontSize='large' />,
      },
    ],
  },
];

const DashboardSidebar = ({ open, onClose }: Props) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });
  const router = useRouter();
  const { t } = useTranslation();
  const sections = useMemo(() => getSections(t), [t]);
  const theme = useTheme();

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath],
  );

  const content = (
    <>
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box>
            <Box sx={{ p: 3, pb: 4 }}>
              <NextLink href='/' passHref>
                <Image
                  alt='Logo'
                  width={120}
                  height={20}
                  style={{ maxWidth: '100%' }}
                  src={`/images/logos/logo_dark.svg`}
                />
              </NextLink>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  '& + &': {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
        </Box>
      </Scrollbar>
    </>
  );

  if (lgUp) {
    //causes hydration error with NextJS when variant='permanent' - reason unknown
    return (
      <Drawer
        anchor='left'
        PaperProps={{
          sx: {
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: 1,
            width,
            bgcolor: 'neutral.800',
          },
        }}
        variant='permanent'
        open
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width,
          bgcolor: 'neutral.800',
        },
      }}
      variant='temporary'
    >
      {content}
    </Drawer>
  );
};

export default DashboardSidebar;
