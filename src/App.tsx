import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './components/navigation';
import routes from './router/routes';

// TODO: Configure eslint correctly
// TODO: Use paths from project root (src)
// TODO: Use styled-components instead of react-native style sheets
// TODO: Use i18n for translations
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation linking={routes} colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
