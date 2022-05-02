import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './components/navigation';
import ThemeProvider from './contexts/ThemeProvider';
import routes from './router/routes';
import './i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Navigation linking={routes} colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
