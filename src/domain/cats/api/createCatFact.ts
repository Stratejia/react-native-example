import { CAT_FACTS_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';
import getFeaturesEnv from '../../../config/features-env';
import type { SaveCatFactParams } from '../schemas/catFacts';

const endpoint = `${CAT_FACTS_BASE_URL}/facts`;

async function createCatFactWithEndpoint(params: SaveCatFactParams) {
  const response = await axios.post(endpoint, params);
  return response.data;
}

function createCatFact(params: SaveCatFactParams) {
  return getFeaturesEnv().useRealCatFacts ? createCatFactWithEndpoint(params) : Promise.resolve();
}

export default createCatFact;
