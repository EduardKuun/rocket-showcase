import { Page } from '@/@types/page';
import RTL from '@/components/RTL';
import { SettingsConsumer, SettingsProvider } from '@/contexts/SettingsContext';
import { createTheme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../i18n';
import apolloClient from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ChatProvider } from '@/contexts/ChatContext';
import { LocationProvider } from '@/contexts/LocationContext';

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={createTheme(settings)}>
              <RTL direction={settings.direction}>
                <LocationProvider>
                  <ChatProvider>
                    <CssBaseline />
                    <Toaster position='top-center' />
                    {getLayout(<Component {...pageProps} />)}
                  </ChatProvider>
                </LocationProvider>
              </RTL>
            </ThemeProvider>
          </ApolloProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

export default App;
