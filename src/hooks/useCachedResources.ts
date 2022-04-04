import { FontAwesome } from '@expo/vector-icons';
import { loadAsync } from 'expo-font';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { useEffect, useState } from 'react';

function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await preventAutoHideAsync();

        await loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

export default useCachedResources;
