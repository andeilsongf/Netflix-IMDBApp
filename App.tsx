import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import Routes from './src/routes/index.routes';
import { useFonts } from 'expo-font';

import { Listing } from './src/screens/Listing';
import { Title } from './src/screens/Title';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Netflix-300': require('./src/assets/fonts/NetflixSans-300.otf'),
    'Netflix-400': require('./src/assets/fonts/NetflixSans-400.otf'),
    'Netflix-500': require('./src/assets/fonts/NetflixSans-500.otf'),
    'Netflix-700': require('./src/assets/fonts/NetflixSans-700.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
