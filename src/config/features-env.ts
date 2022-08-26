import { USE_REAL_CAT_FACTS } from 'react-native-dotenv';

function getFeaturesEnv() {
  return {
    useRealCatFacts: USE_REAL_CAT_FACTS,
  };
}

export default getFeaturesEnv;
