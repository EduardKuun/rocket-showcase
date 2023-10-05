import { ISettings } from '@/lib/models/custom/ISettings';
import useSettings from '@/hooks/useSettings';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Popover,
  Tooltip,
  Typography,
  Drawer,
  useMediaQuery,
  Theme,
  SxProps,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import CloseIcon from '@mui/icons-material/Close';

const getValues = (settings: ISettings) =>
  ({
    theme: settings.theme,
    language: settings.language,
    isOnline: settings.isOnline,
    direction: settings.direction,
    primaryColor: settings.primaryColor,
    secondaryColor: settings.secondaryColor,
    trackSearchRadius: settings.trackSearchRadius,
  } as ISettings);

const languageOptions: any = {
  en: {
    label: 'English',
  },
  af: {
    label: 'Afrikaans',
  },
};

interface Props {
  sx?: SxProps<Theme>;
}

const SettingsPopover = ({ sx }: Props) => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState<ISettings>(getValues(settings));
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setValues(getValues(settings));
    }

    return () => {
      mounted = false;
    };
  }, [settings]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field: any, value: any) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    i18n.changeLanguage(values.language);
    saveSettings(values);
  };

  return (
    <Box sx={sx}>
      <Tooltip title='Site Settings'>
        <IconButton ref={anchorRef} onClick={handleOpen}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        onClose={handleClose}
        open={open}
        anchor='right'
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : 350,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Typography variant='h6'>Site Settings</Typography>
            </Grid>
            <Grid item sx={{ ml: 'auto' }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Typography variant='overline' color='textSecondary'>
              Mode
            </Typography>
            <ButtonGroup variant='outlined' fullWidth color='primary'>
              <Button
                startIcon={
                  <LightModeOutlinedIcon
                    sx={{ ...(values.theme !== 'light' && { color: 'text.secondary' }) }}
                  />
                }
                sx={{
                  ...(values.theme === 'light' && {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(23, 43, 77, 0.04)',
                  }),
                  ...(values.theme !== 'light' && {
                    color: 'text.secondary',
                  }),
                }}
                onClick={() => handleChange('theme', 'light')}
              >
                Light
              </Button>
              <Button
                startIcon={
                  <DarkModeOutlinedIcon
                    sx={{ ...(values.theme !== 'dark' && { color: 'text.secondary' }) }}
                  />
                }
                onClick={() => handleChange('theme', 'dark')}
                sx={{
                  ...(values.theme === 'dark' && {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(23, 43, 77, 0.04)',
                  }),
                  ...(values.theme !== 'dark' && {
                    color: 'text.secondary',
                  }),
                }}
              >
                Dark
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='overline' color='textSecondary'>
              Direction
            </Typography>
            <ButtonGroup variant='outlined' fullWidth color='primary'>
              <Button
                startIcon={
                  <FormatTextdirectionLToRIcon
                    sx={{ ...(values.direction !== 'ltr' && { color: 'text.secondary' }) }}
                  />
                }
                sx={{
                  ...(values.direction === 'ltr' && {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(23, 43, 77, 0.04)',
                  }),
                  ...(values.direction !== 'ltr' && {
                    color: 'text.secondary',
                  }),
                }}
                onClick={() => handleChange('direction', 'ltr')}
              >
                Left to right
              </Button>
              <Button
                startIcon={
                  <FormatTextdirectionRToLIcon
                    sx={{ ...(values.direction !== 'rtl' && { color: 'text.secondary' }) }}
                  />
                }
                onClick={() => handleChange('direction', 'rtl')}
                sx={{
                  ...(values.direction === 'rtl' && {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(23, 43, 77, 0.04)',
                  }),
                  ...(values.direction !== 'rtl' && {
                    color: 'text.secondary',
                  }),
                }}
              >
                Right to left
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='overline' color='textSecondary'>
              Language
            </Typography>
            {Object.keys(languageOptions).map((language) => (
              <Button
                onClick={() => handleChange('language', language)}
                fullWidth
                variant={values.language === language ? 'outlined' : 'text'}
                sx={{
                  justifyContent: 'flex-start',
                  ...(values.language !== language && {
                    color: 'text.secondary',
                  }),
                  ...(values.language === language && {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(23, 43, 77, 0.04)',
                  }),
                }}
                key={language}
              >
                {languageOptions[language].label}
              </Button>
            ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='overline' color='textSecondary'>
              Primary Color
            </Typography>
            <Box>
              <input
                type='color'
                onChange={(e) => handleChange('primaryColor', e.target.value)}
                value={values.primaryColor}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant='overline' color='textSecondary'>
              Secondary Color
            </Typography>
            <Box>
              <input
                type='color'
                onChange={(e) => handleChange('secondaryColor', e.target.value)}
                value={values.secondaryColor}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button
              color='primary'
              fullWidth
              onClick={handleSave}
              variant='contained'
              disabled={_.isEqual(values, settings)}
            >
              Save Settings
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SettingsPopover;
